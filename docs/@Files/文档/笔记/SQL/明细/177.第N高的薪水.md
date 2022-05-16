#### 题目

表: Employee

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| salary      | int  |

Id是该表的主键列。
该表的每一行都包含有关员工工资的信息。
 

编写一个SQL查询来报告 Employee 表中第 n 高的工资。如果没有第 n 个最高工资，查询应该报告为 null 。

查询结果格式如下所示。

 

示例 1:

输入: 
Employee table:

| id  | salary |
| --- | ------ |
| 1   | 100    |
| 2   | 200    |
| 3   | 300    |

n = 2
输出: 

| getNthHighestSalary(2) |
| ---------------------- |
| 200                    |

示例 2:

输入: 
Employee 表:

| id  | salary |
| --- | ------ |
| 1   | 100    |

n = 2
输出: 

| getNthHighestSalary(2) |
| ---------------------- |
| null                   |

[力扣](https://leetcode.cn/problems/nth-highest-salary)

#### 准备表和数据

```sql
Create table If Not Exists Employee (Id int, Salary int);
Truncate table Employee;
insert into Employee (id, salary) values ('1', '100');
insert into Employee (id, salary) values ('2', '200');
insert into Employee (id, salary) values ('3', '300');
```

#### SQL

```sql
# 1、单表查询limit
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  set N := N - 1;
  RETURN (
      # Write your MySQL query statement below.
      SELECT (
              SELECT distinct salary 
                FROM Employee
            ORDER BY salary DESC
               LIMIT N,1
            ) AS SecondHighestSalary
  );
END

# 2、子查询
# 对于每一行，若子查询中金额（去重后）大于此金额的有N-1行，则此金额为第N大的值

SELECT DISTINCT salary
  FROM Employee e
 WHERE (SELECT count(DISTINCT salary) FROM Employee e2 WHERE e2.`salary` > e.`salary`) = N - 1

# 3、自连接
# 通过不等值（）连接，若行数（去重后）为N行，则此金额为第N大的
 SELECT DISTINCT e1.salary
     FROM Employee e1
LEFT JOIN Employee e2
       ON e1.`salary` <= e2.`salary`
 GROUP BY e1.`id`
   HAVING COUNT(DISTINCT e2.`salary`) = 2#N
   
# 4、笛卡儿积
等同于第三条

# 5、自定义变量（实现类似row_number窗口函数效果）
SELECT DISTINCT t.salary
FROM
(
   SELECT e1.salary
          ,@rn := IF(e1.salary = @sal, @rn, @rn + 1) AS rnum
          ,@sal := e1.salary
     FROM Employee e1, (SELECT @rn := 0, @sal := NULL ) init
 ORDER BY e1.salary DESC
) t
WHERE rnum = 2#N

# 6、窗口函数
SELECT DISTINCT t.salary
FROM
(
   SELECT e1.salary
          ,DENSE_RANK() over(order by salary desc) AS rnum
     FROM Employee e1
-- ORDER BY e1.salary DESC
) t
WHERE rnum = 2#N

```

#### 总结

总结MySQL查询的一般性思路是：

* 能用单表优先用单表，即便是需要用group by、order by、limit等，效率一般也比多表高

* 不能用单表时优先用连接，连接是SQL中非常强大的用法，小表驱动大表+建立合适索引+合理运用连接条件，基本上连接可以解决绝大部分问题。但join级数不宜过多，毕竟是一个接近指数级增长的关联效果

* 能不用子查询、笛卡尔积尽量不用，虽然很多情况下MySQL优化器会将其优化成连接方式的执行过程，但效率仍然难以保证

* 自定义变量在复杂SQL实现中会很有用，例如LeetCode中困难级别的数据库题目很多都需要借助自定义变量实现

* 如果MySQL版本允许，某些带聚合功能的查询需求应用窗口函数是一个最优选择。除了经典的获取3种排名信息，还有聚合函数、向前向后取值、百分位等，具体可参考官方指南。

作者：luanhz
链接：https://leetcode.cn/problems/nth-highest-salary/solution/mysql-zi-ding-yi-bian-liang-by-luanz/
