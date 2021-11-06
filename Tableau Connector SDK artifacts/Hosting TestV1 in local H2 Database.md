# Hosting TestV1 in local H2 Database

1. Install the latest H2 Database and accept the defaults

2. Create 'TestV1' database and 'test' user locally using or the Shell tool

- Navigate to **bin** folder located at H2 installation path:

```cd <H2_installation_path>/bin/```

- Start H2 Shell tool:

```
java -cp h2-*.jar org.h2.tools.Shell
```

- Enter the following values for the requested parameters:

```
URL:      jdbc:h2:<path_to_db_file>/TestV1
User:     test
Driver:   [Enter]
Password: [Enter]
```

Note that user 'test' which creates a 'TestV1' database becomes its administrator.

3. Create TestV1 tables

```
RUNSCRIPT FROM '<path_to_connector_plugin_sdk_dir>/tests/datasets/TestV1/DDL/Staples.sql';
RUNSCRIPT FROM '<path_to_connector_plugin_sdk_dir>/tests/datasets/TestV1/DDL/Calcs.sql';
RUNSCRIPT FROM '<path_to_connector_plugin_sdk_dir>/tests/datasets/TestV1/DDL/Batters.sql';
```

4. Load TestV1 dataset

```
INSERT INTO "Staples" SELECT * FROM CSVREAD('<path_to_connector_plugin_sdk_dir>/tests/datasets/TestV1/Staples_utf8_headers.csv');
INSERT INTO "Calcs" SELECT * FROM CSVREAD('<path_to_connector_plugin_sdk_dir>/tests/datasets/TestV1/Calcs_headers.csv');
INSERT INTO "Batters" SELECT * FROM CSVREAD('<path_to_connector_plugin_sdk_dir>/tests/datasets/TestV1/Batters_headers.csv', null, 'null=NULL');
```

5. Example

- Commands with substitued values of pathes

```
cd "/mnt/c/Program Files (x86)/H2/bin"
java -cp h2-*.jar org.h2.tools.Shell

jdbc:h2:/mnt/c/Users/Artem/TestV1
User:     test
Driver:   [Enter]
Password: [Enter]

RUNSCRIPT FROM '/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/DDL/Staples.sql';
RUNSCRIPT FROM '/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/DDL/Calcs.sql';
RUNSCRIPT FROM '/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/DDL/Batters.sql';

INSERT INTO "Staples" SELECT * FROM CSVREAD('/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/Staples_utf8_headers.csv');
INSERT INTO "Calcs" SELECT * FROM CSVREAD('/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/Calcs_headers.csv');
INSERT INTO "Batters" SELECT * FROM CSVREAD('/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/Batters_headers.csv', null, 'null=NULL');
```

- Result of execution:

```
artemius@MACHINE:/mnt/c/Users/Artem$ cd "/mnt/c/Program Files (x86)/H2/bin"
artemius@MACHINE:/mnt/c/Program Files (x86)/H2/bin$ java -cp h2-*.jar org.h2.tools.Shell

Welcome to H2 Shell 1.4.200 (2019-10-14)
Exit with Ctrl+C
[Enter]   jdbc:h2:~/test
URL       jdbc:h2:/mnt/c/Users/Artem/TestV1
[Enter]   org.h2.Driver
Driver
[Enter]
User      test
Password
Type the same password again to confirm database creation.
Password
Connected
Commands are case insensitive; SQL statements end with ';'
help or ?      Display this help
list           Toggle result list / stack trace mode
maxwidth       Set maximum column width (default is 100)
autocommit     Enable or disable autocommit
history        Show the last 20 statements
quit or exit   Close the connection and exit

sql> RUNSCRIPT FROM '/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/DDL/Staples.sql';
(Update count: 2, 23 ms)
sql> RUNSCRIPT FROM '/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/DDL/Calcs.sql';
(Update count: 2, 5 ms)
sql> RUNSCRIPT FROM '/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/DDL/Batters.sql';
(Update count: 2, 4 ms)
sql> INSERT INTO "Staples" SELECT * FROM CSVREAD('/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/Staples_utf8_headers.csv');
(Update count: 54860, 3995 ms)
sql> INSERT INTO "Calcs" SELECT * FROM CSVREAD('/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/Calcs_headers.csv');
(Update count: 17, 14 ms)
sql> INSERT INTO "Batters" SELECT * FROM CSVREAD('/mnt/d/h2-workspace_2021.2/tests/datasets/TestV1/Batters_headers.csv', null, 'null=NULL');
(Update count: 83284, 1371 ms)
sql> exit
Connection closed
artemius@MACHINE:/mnt/c/Program Files (x86)/H2/bin$
```