DROP DATABASE IF EXISTS typescriptAPI_test;
DROP DATABASE IF EXISTS typescriptAPI_dev;

CREATE DATABASE typescriptAPI_test
WITH ENCODING='UTF8'
       TEMPLATE=template0
       LC_COLLATE='C'
       LC_CTYPE='C'
       CONNECTION LIMIT=-1
       TABLESPACE=pg_default;
CREATE DATABASE typescriptAPI_dev
WITH ENCODING='UTF8'
       TEMPLATE=template0
       LC_COLLATE='C'
       LC_CTYPE='C'
       CONNECTION LIMIT=-1
       TABLESPACE=pg_default;