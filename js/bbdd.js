const preguntas = [
   new Pregunta(
      1, 
      "radio", 
      "¿Qué es una Base de Datos?", 
      "-", 
      "Una estructura utilizada para organizar la información en filas y columnas", 0, 
      "Una colección de datos persistentes, lógicamente coherentes, y con significado implícito, que están relacionados entre sí.", 1, 
      "Un conjunto de programas que permiten definir, construir y manipular tablas para diversas aplicaciones",
      0, 
      "Es un programa que muestra aspectos del mundo real", 0, 
      "b", 
      "", 
      ),
      
      new Pregunta(
      2, 
      "radio", 
      "Una colección de datos persistentes, lógicamente coherentes, y con significado implícito, que están relacionados entre sí, es:", 
      "-", 
      "Un Sistema Gestor de Bases de Datos (SGBD)", 0, 
      "Una aplicación informática para el manejo de B.B.D.D.", 0, 
      "Una tabla", 0, 
      "Una base de datos", 1, 
      "d", 
      "", 
      ),
      
      new Pregunta(
      3, 
      "radio", 
      "La herramienta informática que permite crear, manipular, gestionar y eliminar los datos ylas estructuras de una base de datos es:", 
      "-", 
      "Una Base de Datos Jerárquica", 0, 
      "Un Sistema Gestor de Bases de Datos (SGBD)", 1, 
      "Una Base de Datos relacional", 0, 
      "Un generador de tablas", 0, 
      "b", 
      "", 
      ),
      
      new Pregunta(
      4, 
      "radio", 
      "Las bases de datos que creamos y manejamos mediante aplicaciones como Microsoft Access, MySQL y Oracle Database son de tipo:", 
      "-", 
      "relacional", 1, 
      "jerárquica", 0, 
      "documental", 0, 
      "multidimensional", 0, 
      "a", 
      "", 
      ),
      
      new Pregunta(
      5, 
      "radio", 
      "De los siguientes programas, indica cual es un Sistema Gestor de Bases de Datos (SGBD)", 
      "-", 
      "Excel", 0, 
      "Access", 1, 
      "Power BI", 0, 
      "Ecwid", 0, 
      "b", 
      "", 
      ),
      
      new Pregunta(
      6, 
      "radio", 
      " Las fases del diseño de una base de datos relacional son:", 
      "-", 
      "el diseño conceptual y el diseño físico", 0, 
      "el diseño conceptual, el diseño lógico y el diseño físico", 1, 
      "el diseño conceptual, el diseño analógico y el diseño físico", 0, 
      "el diseño digital, el diseño lógico y el diseño global", 0, 
      "b", 
      "", 
      ),
      
      new Pregunta(
      7, 
      "checkbox", 
      "De las siguientes afirmaciones, indica cuales son ciertas respecto a una Base de Datos relacional", 
      "-", 
      "Los datos se representan en tablas", 0.5, 
      "Las tablas deben tener una clave primaria", 0.5, 
      "Pueden existir tablas aisladas", 0, 
      "Las tablas deben tener una clave candidata", 0, 
      "a, b", 
      "", 
      ),
      
      new Pregunta(
      8, 
      "radio", 
      "En una base de datos de tipo relacional …", 
      "-", 
      "los registros son las filas de las tablas", 1, 
      "los registros son las columnas de las tablas", 0, 
      "los campos son las filas de las tablas", 0, 
      "las tuplas son las columnas de las tablas", 0, 
      "a", 
      "", 
      ),
      
      new Pregunta(
      9, 
      "checkbox", 
      "La clave primaria en una tabla de una base de datos relacional...(marca las que consideres correctas)", 
      "-", 
      "Permite relacionar dos tablas al ser referenciado.", 0.33, 
      "No debe tener valores repetidos.", 0.33, 
      "Puede tener valores nulos", 0, 
      "Puede ser el resultado de una combinación de campos", 0.33, 
      "a,b,d", 
      "", 
      ),
      
      new Pregunta(
      10, 
      "radio", 
      "En una base de datos relacional, para establecer una relación entre dos tablas, éstas …", 
      "-", 
      "han de tener el mismo número de campos", 0, 
      "han de tener el mismo número de registros", 0, 
      "han de tener un campo con el mismo tipo y tamaño", 1, 
      "han de tener un campo con el mismo nombre", 0, 
      "c", 
      "", 
      ),
      new Pregunta(
         11, 
         "radio", 
         "<i>[Esta no va]</i> ¿Cuantos tipos de cardinalidad hay?", 
         "-", 
         "Tres. Uno a Uno (1,1), Uno a Varios (1,n), Varios a Varios (n,m)", 1, 
         "Dos. Uno a Varios (1,n) y Varios a Varios (n,m)", 0, 
         "Cuatro. Cero a Uno (1,1), Uno a Uno (1,1), Uno a Varios (1,n), Varios a Varios (n,m)", 0, 
         "Cuatro.  Uno a Uno (1,1), Varios a uno (1,n), Uno a Varios (1,n), Varios a Varios (n,m)", 0, 
         "a", 
         "", 
         ),
         
         new Pregunta(
         12, 
         "radio", 
         " ¿Qué es una relación?", 
         "-", 
         "Son asociaciones entre tablas que se permiten recuperar datos.", 1, 
         "Es una regla que específica si es necesario que exista un valor en un campo", 0, 
         "Es una regla que se refiere al conjunto de valores que puede tomar un campo.", 0, 
         "Es una restricción que debe cumplirse sobre una Base de Datos en todos sus estados.", 0, 
         "a", 
         "", 
         ),
         
         new Pregunta(
         13, 
         "radio", 
         "¿Qué es una Clave Candidata?", 
         "-", 
         "Es un campo de la tabla que también pudiera ser clave primaria.", 1, 
         "Es un campo que permite relacionar dos tablas al ser referenciado.", 0, 
         "Es un campo que referencia a la clave primaria de otra tabla.", 0, 
         "Es una asociación que describen alguna interacción entre dos tablas del modelo", 0, 
         "a", 
         "", 
         ),
         
         new Pregunta(
         14, 
         "radio", 
         "¿Qué es una Regla de Integridad?", 
         "-", 
         "Son reglas que sirven para definir o restringir alguna acción en una BBDD en particular.", 0, 
         "Es una regla que permite cambios en la estructura sin afectar los Datos almacenados", 0, 
         "Es una restricción que debe cumplirse sobre una Base de Datos en todos sus estados.", 1, 
         "Es una función que permite el acceso simultáneo a los datos sin interferencias ni inconsistencias", 0, 
         "c", 
         "", 
         ),
         
         new Pregunta(
         15, 
         "checkbox", 
         "Indique cuales de los siguientes objetivos pertenece a los Sistemas Gestores de Base de Datos (SGBD)", 
         "-", 
         "Independencia Física", 0.5, 
         "Asegurar la seguridad de los datos", 0.5, 
         "Representar de forma simbólica a una variable", 0, 
         "Describir hechos empíricos, sucesos y entidades.", 0, 
         "a, b", 
         "", 
         ),
         
         new Pregunta(
         16, 
         "checkbox", 
         "Indique cuales de los siguientes objetivos pertenece a los Sistemas Gestores de Base de Datos (SGBD)", 
         "-", 
         "Representar de forma simbólica a una variable", 0, 
         "Respaldar los datos", 0.5, 
         "Describir hechos empíricos, sucesos y entidades.", 0, 
         "Controlar que no exista redundancia de Datos", 0.5, 
         "b, d", 
         "", 
         ),
         
         new Pregunta(
         17, 
         "radio", 
         "¿Qué es la descripción de requisitos?", 
         "-", 
         "Es una descripción completa del comportamiento de un sistema", 0, 
         "Son las necesidades relativas a los datos, escritos en lenguaje natural.", 1, 
         "Se trata de aquello que resulta ineludible o imprescindible para el desarrollo de algo.", 0, 
         "Es el documento de soporte de un sistema.", 0, 
         "b", 
         "", 
         ),
         
         new Pregunta(
         18, 
         "radio", 
         "A qué se refiere el siguiente concepto: representación simbólica (numérica, alfabética, algorítmica etc.), un atributo o una característica de una entidad.", 
         "-", 
         "Información", 0, 
         "Registro", 0, 
         "Campo", 0, 
         "Dato", 1, 
         "d", 
         "", 
         ),
         
         new Pregunta(
         19, 
         "radio", 
         "Representa una característica de un individuo u objeto. Es la unidad básica de una tabla.", 
         "-", 
         "Campo", 1, 
         "Byte", 0, 
         "Clave", 0, 
         "Dato", 0, 
         "a", 
         "", 
         ),
         
         new Pregunta(
         20, 
         "radio", 
         "¿Qué son las Restricciones Semánticas?", 
         "-", 
         "Son reglas del modelo de BBDD que se han de respetar SIEMPRE", 0, 
         "Son reglas que indican cómo recuperar los datos tras fallos del hardware o software", 0, 
         "Son reglas que sirven para definir o restringir alguna acción en una BBDD en particular.", 1, 
         "Son reglas que controlan la concurrencia de los usuarios sin interferencias ni inconsistencias", 0, 
         "c", 
         "", 
         ),                  
]

const NUM_PREGUNTAS = preguntas.length;