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
