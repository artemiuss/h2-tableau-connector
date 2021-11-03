# Tableau connectors to H2 Database using ODBC or JDBC driver

These extensions(contains both ODBC and JDBC version) enable Tableau Desktop/Server to access H2 Database Engine using ODBC or JDBC driver.

Tableau Desktop/Server does not have built-in ability to connect to **H2 Database Engine** currently. It is possible to use generic "Other Databases (ODBC/JDBC)" connectors to connect to H2 Database Engine. However using a custom Tableau Connector built with Tableau Connector SDK tool offers the following benefits compared to generic "Other Databases (ODBC/JDBC)" connectors):
- Simplifies the connection process
- Improves compatibility between Tableau and H2 Database Engine
- Gives users full access to Tableau data modeling and exploration features on H2 Database data
- Better live query support. Custom connectors use customized dialect to generate SQL queries so they are compatible and optimized for the specific database. The Other Database connectors rely on higher-level standard SQL that may not always be appropriate.
- Runs in both Tableau Desktop and Tableau Server. No configuration is required after you install the connector

>This database does not come with its own ODBC driver at this time, but it supports the PostgreSQL network protocol. Therefore, the PostgreSQL ODBC driver can be used. Support for the PostgreSQL network protocol is quite new and should be viewed as experimental. It should not be used for production applications.

