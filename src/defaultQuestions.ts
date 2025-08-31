import { Question } from './types';

export const defaultQuestions: Question[] = [
  // Data Governance (25 Questions)
  {
    id: 1,
    chapter: 'Data Governance',
    question: 'What is the primary objective of Data Governance?',
    options: [
      'To manage IT infrastructure',
      'To ensure data is managed as a strategic enterprise asset',
      'To build data warehouses',
      'To perform data entry tasks'
    ],
    correctAnswer: 'To ensure data is managed as a strategic enterprise asset'
  },
  {
    id: 2,
    chapter: 'Data Governance',
    question: 'Which role is primarily responsible for the day-to-day management of a specific data domain?',
    options: ['Data Owner', 'Data Steward', 'Data Custodian', 'Chief Data Officer'],
    correctAnswer: 'Data Steward'
  },
  {
    id: 3,
    chapter: 'Data Governance',
    question: 'A Data Governance Council is typically composed of:',
    options: [
      'Only IT staff',
      'Only executive leaders',
      'Senior-level stakeholders from across the business and IT',
      'External consultants'
    ],
    correctAnswer: 'Senior-level stakeholders from across the business and IT'
  },
  {
    id: 4,
    chapter: 'Data Governance',
    question: 'What is a data policy?',
    options: [
      'A database backup schedule',
      'A high-level statement of intent and direction for data management',
      'A technical specification for a database table',
      'A user access request form'
    ],
    correctAnswer: 'A high-level statement of intent and direction for data management'
  },
  {
    id: 5,
    chapter: 'Data Governance',
    question: 'The responsibility for granting authorized access to data typically lies with the:',
    options: ['Data Steward', 'Data User', 'Data Owner', 'Data Custodian'],
    correctAnswer: 'Data Owner'
  },
  {
    id: 6,
    chapter: 'Data Governance',
    question: 'Which of the following is a key driver for implementing Data Governance?',
    options: [
      'Reducing office supply costs',
      'Regulatory compliance (e.g., GDPR, CCPA)',
      'Upgrading employee laptops',
      'Designing a new company logo'
    ],
    correctAnswer: 'Regulatory compliance (e.g., GDPR, CCPA)'
  },
  {
    id: 7,
    chapter: 'Data Governance',
    question: 'What does the "DAMA-DMBOK" stand for?',
    options: [
      'Data Management Association - Data Model Body of Knowledge',
      'Data & Marketing Association - Database Management Body of Knowledge',
      'Data Management Association - Data Management Body of Knowledge',
      'Database Management Association - Data Modeling Body of Knowledge'
    ],
    correctAnswer: 'Data Management Association - Data Management Body of Knowledge'
  },
  {
    id: 8,
    chapter: 'Data Governance',
    question: 'A Data Steward is accountable for...',
    options: [
      'Writing the SQL code for reports.',
      'The definition, quality, and usage of data within their assigned domain.',
      'Performing server maintenance.',
      'Procuring database licenses.'
    ],
    correctAnswer: 'The definition, quality, and usage of data within their assigned domain.'
  },
  {
    id: 9,
    chapter: 'Data Governance',
    question: 'The role that is responsible for the technical environment and database structures is the:',
    options: ['Data Custodian', 'Data Steward', 'Data Owner', 'Data Analyst'],
    correctAnswer: 'Data Custodian'
  },
  {
    id: 10,
    chapter: 'Data Governance',
    question: 'Which is a common Data Governance operating model?',
    options: ['Centralized', 'Decentralized', 'Federated', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 11,
    chapter: 'Data Governance',
    question: 'What is a business glossary?',
    options: [
      'A list of database table names',
      'A repository of business terms, definitions, and their relationships',
      'A technical data dictionary',
      'A server log file'
    ],
    correctAnswer: 'A repository of business terms, definitions, and their relationships'
  },
  {
    id: 12,
    chapter: 'Data Governance',
    question: 'Effective Data Governance requires a balance between:',
    options: [
      'Offense and defense',
      'Value creation and risk mitigation',
      'Control and flexibility',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    id: 13,
    chapter: 'Data Governance',
    question: 'What is the purpose of a Data Governance charter?',
    options: [
      'To list all the data elements in a database',
      'To formally establish the Data Governance program and grant it authority',
      'To provide a tutorial on SQL',
      'To document the network topology'
    ],
    correctAnswer: 'To formally establish the Data Governance program and grant it authority'
  },
  {
    id: 14,
    chapter: 'Data Governance',
    question: 'Which of these is a typical metric for measuring the success of a Data Governance program?',
    options: [
      'Number of servers decommissioned',
      'Improvement in data quality scores',
      'Lines of code written by developers',
      'Number of helpdesk calls'
    ],
    correctAnswer: 'Improvement in data quality scores'
  },
  {
    id: 15,
    chapter: 'Data Governance',
    question: 'The process of resolving disputes over data definitions or standards is called:',
    options: [
      'Data modeling',
      'Issue resolution',
      'Database administration',
      'Data archiving'
    ],
    correctAnswer: 'Issue resolution'
  },
  {
    id: 16,
    chapter: 'Data Governance',
    question: 'A "domain" in the context of data governance refers to:',
    options: [
      'A website address',
      'A logical grouping of data, such as Customer, Product, or Finance',
      'A type of database server',
      'A project management methodology'
    ],
    correctAnswer: 'A logical grouping of data, such as Customer, Product, or Finance'
  },
  {
    id: 17,
    chapter: 'Data Governance',
    question: 'Why is communication a critical component of a Data Governance program?',
    options: [
      'To ensure stakeholders are aware of policies and their responsibilities',
      'To fulfill a marketing requirement',
      'To test the company email system',
      'It is not a critical component'
    ],
    correctAnswer: 'To ensure stakeholders are aware of policies and their responsibilities'
  },
  {
    id: 18,
    chapter: 'Data Governance',
    question: 'Which operating model features a central Data Governance Office (DGO) with domain-level stewardship?',
    options: ['Decentralized', 'Anarchical', 'Federated', 'Local'],
    correctAnswer: 'Federated'
  },
  {
    id: 19,
    chapter: 'Data Governance',
    question: 'The concept of "Data as an Asset" means:',
    options: [
      'Data is physically stored on company-owned hardware',
      'Data has economic value and should be managed like other assets (e.g., cash, property)',
      'Data can be sold to third parties without restriction',
      'Data is a liability and should be deleted quickly'
    ],
    correctAnswer: 'Data has economic value and should be managed like other assets (e.g., cash, property)'
  },
  {
    id: 20,
    chapter: 'Data Governance',
    question: 'Which is NOT a direct goal of Data Governance?',
    options: [
      'Improve data quality',
      'Increase data consistency',
      'Manage data risk',
      'Select and purchase specific software vendors'
    ],
    correctAnswer: 'Select and purchase specific software vendors'
  },
  {
    id: 21,
    chapter: 'Data Governance',
    question: 'A data standard is a:',
    options: [
      'A rule that must be followed when creating, modifying, or using data',
      'A type of relational database',
      'A report on data usage',
      'A suggestion that can be ignored'
    ],
    correctAnswer: 'A rule that must be followed when creating, modifying, or using data'
  },
  {
    id: 22,
    chapter: 'Data Governance',
    question: 'The highest-ranking executive with responsibility for an organization\'s data is often the:',
    options: ['Chief Financial Officer (CFO)', 'Chief Information Officer (CIO)', 'Chief Data Officer (CDO)', 'Chief Executive Officer (CEO)'],
    correctAnswer: 'Chief Data Officer (CDO)'
  },
  {
    id: 23,
    chapter: 'Data Governance',
    question: 'What is a data sharing agreement?',
    options: [
      'An informal email chain',
      'A formal contract that specifies the terms and conditions for sharing data between parties',
      'A database view',
      'A network protocol'
    ],
    correctAnswer: 'A formal contract that specifies the terms and conditions for sharing data between parties'
  },
  {
    id: 24,
    chapter: 'Data Governance',
    question: 'Which of the following describes the difference between a Data Owner and a Data Steward?',
    options: [
      'There is no difference',
      'An Owner is a manager with accountability, while a Steward is a subject matter expert with responsibility',
      'A Steward is a manager, while an Owner is a technical expert',
      'An Owner manages databases, a Steward manages reports'
    ],
    correctAnswer: 'An Owner is a manager with accountability, while a Steward is a subject matter expert with responsibility'
  },
  {
    id: 25,
    chapter: 'Data Governance',
    question: 'The activities of a Data Governance program should be guided by:',
    options: [
      'The preferences of the IT department',
      'The organization\'s overall business strategy and objectives',
      'The features of a specific software tool',
      'The personal opinions of the Data Stewards'
    ],
    correctAnswer: 'The organization\'s overall business strategy and objectives'
  },

  // Data Quality (30 Questions)
  {
    id: 26,
    chapter: 'Data Quality',
    question: 'Which data quality dimension refers to the degree to which data is correct?',
    options: ['Completeness', 'Timeliness', 'Accuracy', 'Consistency'],
    correctAnswer: 'Accuracy'
  },
  {
    id: 27,
    chapter: 'Data Quality',
    question: '"Is the data available when needed?" relates to which dimension of data quality?',
    options: ['Validity', 'Timeliness', 'Uniqueness', 'Accuracy'],
    correctAnswer: 'Timeliness'
  },
  {
    id: 28,
    chapter: 'Data Quality',
    question: 'The absence of duplicate records refers to which data quality dimension?',
    options: ['Completeness', 'Uniqueness', 'Integrity', 'Consistency'],
    correctAnswer: 'Uniqueness'
  },
  {
    id: 29,
    chapter: 'Data Quality',
    question: 'A data quality rule specifies that a customer\'s age cannot be negative. This relates to:',
    options: ['Accuracy', 'Completeness', 'Validity', 'Timeliness'],
    correctAnswer: 'Validity'
  },
  {
    id: 30,
    chapter: 'Data Quality',
    question: 'The process of correcting, standardizing, and verifying data is called:',
    options: ['Data Migration', 'Data Archiving', 'Data Cleansing', 'Data Modeling'],
    correctAnswer: 'Data Cleansing'
  },
  {
    id: 31,
    chapter: 'Data Quality',
    question: 'Data profiling is the process of:',
    options: [
      'Creating user profiles for an application',
      'Examining data to understand its structure, content, and quality',
      'Deleting old data from a system',
      'Backing up a database'
    ],
    correctAnswer: 'Examining data to understand its structure, content, and quality'
  },
  {
    id: 32,
    chapter: 'Data Quality',
    question: 'Which of the following ensures that a value in one table has a corresponding value in another table?',
    options: ['Primary Key', 'Data Type', 'Referential Integrity', 'Default Value'],
    correctAnswer: 'Referential Integrity'
  },
  {
    id: 33,
    chapter: 'Data Quality',
    question: 'The dimension of data quality that ensures all required data is present is:',
    options: ['Accuracy', 'Completeness', 'Consistency', 'Validity'],
    correctAnswer: 'Completeness'
  },
  {
    id: 34,
    chapter: 'Data Quality',
    question: 'If a customer is listed with two different birth dates in two different systems, this is a failure of:',
    options: ['Completeness', 'Timeliness', 'Consistency', 'Uniqueness'],
    correctAnswer: 'Consistency'
  },
  {
    id: 35,
    chapter: 'Data Quality',
    question: 'Root Cause Analysis in data quality is used to:',
    options: [
      'Identify the fundamental reason for a data defect',
      'Delete bad data',
      'Create reports on data quality',
      'Design new databases'
    ],
    correctAnswer: 'Identify the fundamental reason for a data defect'
  },
  {
    id: 36,
    chapter: 'Data Quality',
    question: 'What is a data quality firewall?',
    options: [
      'A network security device',
      'A process that prevents bad data from entering a system or application',
      'A report that lists data errors',
      'A team of data quality analysts'
    ],
    correctAnswer: 'A process that prevents bad data from entering a system or application'
  },
  {
    id: 37,
    chapter: 'Data Quality',
    question: '"Fitness for purpose" is a common definition for:',
    options: ['Data Governance', 'Data Architecture', 'Data Quality', 'Data Security'],
    correctAnswer: 'Data Quality'
  },
  {
    id: 38,
    chapter: 'Data Quality',
    question: 'Parsing a free-text address field into components like Street, City, and Zip Code is an example of:',
    options: ['Data enrichment', 'Data standardization', 'Data validation', 'Data masking'],
    correctAnswer: 'Data standardization'
  },
  {
    id: 39,
    chapter: 'Data Quality',
    question: 'A Service Level Agreement (SLA) for data quality would typically define:',
    options: [
      'Acceptable data quality thresholds',
      'The cost of database software',
      'The number of developers on a team',
      'The company\'s vacation policy'
    ],
    correctAnswer: 'Acceptable data quality thresholds'
  },
  {
    id: 40,
    chapter: 'Data Quality',
    question: 'Which of the following is a proactive approach to data quality management?',
    options: [
      'Waiting for users to report errors',
      'Periodically cleansing the entire database',
      'Embedding data quality rules into data entry applications',
      'Ignoring data quality issues'
    ],
    correctAnswer: 'Embedding data quality rules into data entry applications'
  },
  {
    id: 41,
    chapter: 'Data Quality',
    question: 'The process of matching records that refer to the same entity is called:',
    options: [
      'Data profiling',
      'Record linkage or entity resolution',
      'Data validation',
      'Data classification'
    ],
    correctAnswer: 'Record linkage or entity resolution'
  },
  {
    id: 42,
    chapter: 'Data Quality',
    question: 'A data quality scorecard or dashboard is used to:',
    options: [
      'Monitor and report on data quality metrics over time',
      'Perform database backups',
      'Grant user access',
      'Write SQL queries'
    ],
    correctAnswer: 'Monitor and report on data quality metrics over time'
  },
  {
    id: 43,
    chapter: 'Data Quality',
    question: 'The "Six Sigma" methodology can be applied to data quality to:',
    options: [
      'Choose a cloud provider',
      'Systematically reduce the rate of data defects',
      'Design marketing campaigns',
      'Negotiate software licenses'
    ],
    correctAnswer: 'Systematically reduce the rate of data defects'
  },
  {
    id: 44,
    chapter: 'Data Quality',
    question: 'If a data element must conform to a specific format (e.g., YYYY-MM-DD for a date), this refers to:',
    options: ['Accuracy', 'Completeness', 'Reasonableness', 'Conformity/Format'],
    correctAnswer: 'Conformity/Format'
  },
  {
    id: 45,
    chapter: 'Data Quality',
    question: 'Which is a common consequence of poor data quality?',
    options: [
      'Increased operational efficiency',
      'Flawed business decisions',
      'Higher customer satisfaction',
      'Reduced regulatory risk'
    ],
    correctAnswer: 'Flawed business decisions'
  },
  {
    id: 46,
    chapter: 'Data Quality',
    question: 'The term "garbage in, garbage out" (GIGO) highlights the importance of:',
    options: [
      'Data entry and capture processes',
      'Data storage hardware',
      'Data reporting tools',
      'Data archiving policies'
    ],
    correctAnswer: 'Data entry and capture processes'
  },
  {
    id: 47,
    chapter: 'Data Quality',
    question: 'Appending demographic information to a customer record from a third-party source is an example of:',
    options: ['Data cleansing', 'Data enrichment', 'Data profiling', 'Data validation'],
    correctAnswer: 'Data enrichment'
  },
  {
    id: 48,
    chapter: 'Data Quality',
    question: 'Measuring the cost of poor data quality helps to:',
    options: [
      'Build a business case for a data quality initiative',
      'Select a new database vendor',
      'Hire more developers',
      'Design a new user interface'
    ],
    correctAnswer: 'Build a business case for a data quality initiative'
  },
  {
    id: 49,
    chapter: 'Data Quality',
    question: 'Which data quality dimension ensures that data represents the same information across different systems?',
    options: ['Accuracy', 'Timeliness', 'Consistency', 'Completeness'],
    correctAnswer: 'Consistency'
  },
  {
    id: 50,
    chapter: 'Data Quality',
    question: 'The Total Quality Management (TQM) principle of "prevention over detection" means:',
    options: [
      'It is better to fix errors after they occur',
      'It is more effective to prevent errors from happening in the first place',
      'Detection of errors is impossible',
      'Prevention and detection are equally costly'
    ],
    correctAnswer: 'It is more effective to prevent errors from happening in the first place'
  },
  {
    id: 51,
    chapter: 'Data Quality',
    question: 'Which of the following is an example of a data quality metric?',
    options: [
      'Server uptime percentage',
      'Percentage of records with a valid email address',
      'Number of reports generated per month',
      'Average query response time'
    ],
    correctAnswer: 'Percentage of records with a valid email address'
  },
  {
    id: 52,
    chapter: 'Data Quality',
    question: 'A data quality issue log is used to:',
    options: [
      'Track and manage the resolution of identified data defects',
      'Store historical data',
      'Define business rules',
      'Monitor network traffic'
    ],
    correctAnswer: 'Track and manage the resolution of identified data defects'
  },
  {
    id: 53,
    chapter: 'Data Quality',
    question: 'What is the first step in a data quality assessment?',
    options: [
      'Cleanse the data',
      'Purchase a data quality tool',
      'Define the scope and objectives',
      'Correct all errors'
    ],
    correctAnswer: 'Define the scope and objectives'
  },
  {
    id: 54,
    chapter: 'Data Quality',
    question: 'The dimension that checks if data values fall within an acceptable range is:',
    options: ['Accuracy', 'Uniqueness', 'Reasonableness', 'Timeliness'],
    correctAnswer: 'Reasonableness'
  },
  {
    id: 55,
    chapter: 'Data Quality',
    question: 'Who has the primary responsibility for ensuring data quality?',
    options: [
      'Only the IT department',
      'Only the data quality team',
      'It is a shared responsibility across the organization',
      'External auditors'
    ],
    correctAnswer: 'It is a shared responsibility across the organization'
  },

  // Metadata Management (25 Questions)
  {
    id: 56,
    chapter: 'Metadata Management',
    question: 'Metadata is often defined as:',
    options: [
      'The raw data itself',
      'Data about data',
      'A type of database',
      'A report or dashboard'
    ],
    correctAnswer: 'Data about data'
  },
  {
    id: 57,
    chapter: 'Metadata Management',
    question: 'Which of the following is an example of business metadata?',
    options: [
      'Database table name',
      'The definition of "Active Customer"',
      'Data type (e.g., VARCHAR)',
      'Index name'
    ],
    correctAnswer: 'The definition of "Active Customer"'
  },
  {
    id: 58,
    chapter: 'Metadata Management',
    question: 'The data type of a column, such as "Integer" or "String", is an example of:',
    options: ['Business Metadata', 'Technical Metadata', 'Operational Metadata', 'Process Metadata'],
    correctAnswer: 'Technical Metadata'
  },
  {
    id: 59,
    chapter: 'Metadata Management',
    question: 'A data dictionary typically contains:',
    options: [
      'Business definitions',
      'Information about data structures, such as tables, columns, and data types',
      'Company financial statements',
      'User login credentials'
    ],
    correctAnswer: 'Information about data structures, such as tables, columns, and data types'
  },
  {
    id: 60,
    chapter: 'Metadata Management',
    question: 'What is a primary benefit of a metadata repository?',
    options: [
      'It replaces the need for a data warehouse',
      'It provides a centralized location for storing and managing metadata',
      'It automatically cleanses all data',
      'It improves network speed'
    ],
    correctAnswer: 'It provides a centralized location for storing and managing metadata'
  },
  {
    id: 61,
    chapter: 'Metadata Management',
    question: 'Data lineage is a form of metadata that describes:',
    options: [
      'The physical location of a server',
      'The origin, movement, and transformation of data over time',
      'The access permissions for a user',
      'The age of a data record'
    ],
    correctAnswer: 'The origin, movement, and transformation of data over time'
  },
  {
    id: 62,
    chapter: 'Metadata Management',
    question: 'A business glossary differs from a data dictionary in that it is:',
    options: [
      'More technical and IT-focused',
      'Less important for data governance',
      'Primarily for business users and focuses on definitions and context',
      'Only used for relational databases'
    ],
    correctAnswer: 'Primarily for business users and focuses on definitions and context'
  },
  {
    id: 63,
    chapter: 'Metadata Management',
    question: 'Which of the following is NOT a type of metadata?',
    options: ['Business', 'Technical', 'Operational', 'Transactional'],
    correctAnswer: 'Transactional'
  },
  {
    id: 64,
    chapter: 'Metadata Management',
    question: 'Why is metadata crucial for data governance?',
    options: [
      'It provides context and understanding needed to manage data as an asset',
      'It increases the size of the database',
      'It makes queries run faster',
      'It is not crucial for data governance'
    ],
    correctAnswer: 'It provides context and understanding needed to manage data as an asset'
  },
  {
    id: 65,
    chapter: 'Metadata Management',
    question: 'Information about ETL job execution times and success/failure status is an example of:',
    options: ['Business Metadata', 'Technical Metadata', 'Operational Metadata', 'Structural Metadata'],
    correctAnswer: 'Operational Metadata'
  },
  {
    id: 66,
    chapter: 'Metadata Management',
    question: 'The process of discovering and collecting metadata from various data sources is called:',
    options: [
      'Metadata harvesting or scanning',
      'Metadata deletion',
      'Data cleansing',
      'Data archiving'
    ],
    correctAnswer: 'Metadata harvesting or scanning'
  },
  {
    id: 67,
    chapter: 'Metadata Management',
    question: 'An active metadata repository:',
    options: [
      'Is read-only and updated manually',
      'Drives data management processes and can be updated automatically',
      'Contains only business metadata',
      'Is used exclusively for backups'
    ],
    correctAnswer: 'Drives data management processes and can be updated automatically'
  },
  {
    id: 68,
    chapter: 'Metadata Management',
    question: 'Which question can be answered using data lineage?',
    options: [
      'What is the definition of "net revenue"?',
      'If this report is wrong, what upstream systems could be the cause?',
      'Who has access to this data?',
      'How old is this data?'
    ],
    correctAnswer: 'If this report is wrong, what upstream systems could be the cause?'
  },
  {
    id: 69,
    chapter: 'Metadata Management',
    question: 'The Dublin Core is a well-known standard for:',
    options: [
      'Relational database design',
      'Web resource metadata (e.g., for documents and images)',
      'Data quality metrics',
      'Cloud data storage'
    ],
    correctAnswer: 'Web resource metadata (e.g., for documents and images)'
  },
  {
    id: 70,
    chapter: 'Metadata Management',
    question: 'Metadata helps enable:',
    options: ['Data discovery', 'Impact analysis', 'Regulatory compliance', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 71,
    chapter: 'Metadata Management',
    question: 'What is the primary challenge in metadata management?',
    options: [
      'Keeping metadata synchronized with constantly changing data landscapes',
      'Finding enough disk space to store metadata',
      'Writing SQL queries',
      'There are no challenges'
    ],
    correctAnswer: 'Keeping metadata synchronized with constantly changing data landscapes'
  },
  {
    id: 72,
    chapter: 'Metadata Management',
    question: 'The relationship between a business term in a glossary and a physical table column is a key function of:',
    options: [
      'Network management',
      'Metadata integration',
      'Database administration',
      'User training'
    ],
    correctAnswer: 'Metadata integration'
  },
  {
    id: 73,
    chapter: 'Metadata Management',
    question: 'The person responsible for defining a business term in the business glossary is typically the:',
    options: ['Data Custodian', 'Data Steward', 'Database Administrator', 'Network Engineer'],
    correctAnswer: 'Data Steward'
  },
  {
    id: 74,
    chapter: 'Metadata Management',
    question: 'In a data catalog, tags and annotations are examples of:',
    options: [
      'Technical metadata',
      'Collaborative metadata (or user-generated metadata)',
      'Operational metadata',
      'The data itself'
    ],
    correctAnswer: 'Collaborative metadata (or user-generated metadata)'
  },
  {
    id: 75,
    chapter: 'Metadata Management',
    question: 'Which type of metadata describes the relationships between data elements?',
    options: ['Structural Metadata', 'Administrative Metadata', 'Descriptive Metadata', 'Statistical Metadata'],
    correctAnswer: 'Structural Metadata'
  },
  {
    id: 76,
    chapter: 'Metadata Management',
    question: 'A key benefit of managing metadata is improved:',
    options: ['Analyst productivity', 'Server performance', 'Office ergonomics', 'Building security'],
    correctAnswer: 'Analyst productivity'
  },
  {
    id: 77,
    chapter: 'Metadata Management',
    question: 'The CWM (Common Warehouse Metamodel) is an OMG standard for:',
    options: [
      'Exchanging metadata between data warehousing and BI tools',
      'Designing websites',
      'Managing user permissions',
      'Storing unstructured data'
    ],
    correctAnswer: 'Exchanging metadata between data warehousing and BI tools'
  },
  {
    id: 78,
    chapter: 'Metadata Management',
    question: 'Understanding data lineage is critical for performing:',
    options: ['Data backups', 'Root cause analysis and impact analysis', 'User acceptance testing', 'Network configuration'],
    correctAnswer: 'Root cause analysis and impact analysis'
  },
  {
    id: 79,
    chapter: 'Metadata Management',
    question: 'What is a data classification policy used for?',
    options: [
      'To categorize data based on its sensitivity (e.g., Public, Internal, Confidential)',
      'To decide which brand of server to buy',
      'To organize the company picnic',
      'To write database queries'
    ],
    correctAnswer: 'To categorize data based on its sensitivity (e.g., Public, Internal, Confidential)'
  },
  {
    id: 80,
    chapter: 'Metadata Management',
    question: 'A key input to a business glossary is:',
    options: [
      'The physical data model',
      'Interviews with business subject matter experts',
      'Server performance logs',
      'The brand of the database software'
    ],
    correctAnswer: 'Interviews with business subject matter experts'
  },

  // Data Architecture (25 Questions)
  {
    id: 81,
    chapter: 'Data Architecture',
    question: 'Data architecture is primarily concerned with:',
    options: [
      'Writing application code',
      'Designing the blueprint for an organization\'s data assets',
      'Managing IT projects',
      'Providing technical support to users'
    ],
    correctAnswer: 'Designing the blueprint for an organization\'s data assets'
  },
  {
    id: 82,
    chapter: 'Data Architecture',
    question: 'The Zachman Framework is an example of:',
    options: [
      'A database system',
      'An enterprise architecture framework',
      'A programming language',
      'A data quality tool'
    ],
    correctAnswer: 'An enterprise architecture framework'
  },
  {
    id: 83,
    chapter: 'Data Architecture',
    question: 'What is a key difference between a data warehouse and a data lake?',
    options: [
      'Warehouses store unstructured data; lakes store structured data',
      'Warehouses use a schema-on-write approach; lakes use schema-on-read',
      'Warehouses are for real-time data; lakes are for batch data',
      'There is no difference'
    ],
    correctAnswer: 'Warehouses use a schema-on-write approach; lakes use schema-on-read'
  },
  {
    id: 84,
    chapter: 'Data Architecture',
    question: 'An Operational Data Store (ODS) is primarily used for:',
    options: [
      'Long-term historical analysis',
      'Integrating data from multiple operational systems for current, tactical reporting',
      'Storing unstructured data like videos and images',
      'Archiving old data'
    ],
    correctAnswer: 'Integrating data from multiple operational systems for current, tactical reporting'
  },
  {
    id: 85,
    chapter: 'Data Architecture',
    question: 'TOGAF (The Open Group Architecture Framework) is a methodology for:',
    options: [
      'Database administration',
      'Enterprise architecture',
      'Agile software development',
      'Network security'
    ],
    correctAnswer: 'Enterprise architecture'
  },
  {
    id: 86,
    chapter: 'Data Architecture',
    question: 'What does "schema-on-read" mean?',
    options: [
      'A data structure is applied to the data when it is written to storage',
      'A data structure is applied to the data only when it is queried',
      'The data has no schema',
      'The schema is deleted after reading'
    ],
    correctAnswer: 'A data structure is applied to the data only when it is queried'
  },
  {
    id: 87,
    chapter: 'Data Architecture',
    question: 'A data mart is a:',
    options: [
      'Large, enterprise-wide repository of all data',
      'Subset of a data warehouse focused on a specific business line or department',
      'Place where data is sold',
      'A type of transactional database'
    ],
    correctAnswer: 'Subset of a data warehouse focused on a specific business line or department'
  },
  {
    id: 88,
    chapter: 'Data Architecture',
    question: 'Which of the following is a characteristic of a data warehouse?',
    options: ['Volatile', 'Subject-oriented', 'Normalized', 'Application-oriented'],
    correctAnswer: 'Subject-oriented'
  },
  {
    id: 89,
    chapter: 'Data Architecture',
    question: 'The practice of making data available to those who need it, through a variety of tools and platforms, is known as:',
    options: [
      'Data hoarding',
      'Data democratization',
      'Data deletion',
      'Data encryption'
    ],
    correctAnswer: 'Data democratization'
  },
  {
    id: 90,
    chapter: 'Data Architecture',
    question: 'A Lambda architecture is designed to handle:',
    options: [
      'Only small datasets',
      'Both batch and real-time data processing',
      'Only structured data',
      'Only data from relational databases'
    ],
    correctAnswer: 'Both batch and real-time data processing'
  },
  {
    id: 91,
    chapter: 'Data Architecture',
    question: 'Which technology is most associated with data lakes?',
    options: ['SQL Server', 'Oracle', 'Hadoop/HDFS', 'Microsoft Access'],
    correctAnswer: 'Hadoop/HDFS'
  },
  {
    id: 92,
    chapter: 'Data Architecture',
    question: 'What is a canonical data model?',
    options: [
      'A data model specific to one application',
      'A standardized, application-neutral data model that facilitates data sharing',
      'A data model that is highly denormalized',
      'A data model stored in the cloud'
    ],
    correctAnswer: 'A standardized, application-neutral data model that facilitates data sharing'
  },
  {
    id: 93,
    chapter: 'Data Architecture',
    question: 'A data hub architecture is typically:',
    options: [
      'A point-to-point integration model',
      'A model where data flows through a central point for distribution',
      'A model with no integration',
      'A model where every system connects directly to every other system'
    ],
    correctAnswer: 'A model where data flows through a central point for distribution'
  },
  {
    id: 94,
    chapter: 'Data Architecture',
    question: 'Which of the following aligns business requirements with data and technology?',
    options: ['Data modeling', 'Data architecture', 'Database administration', 'Data entry'],
    correctAnswer: 'Data architecture'
  },
  {
    id: 95,
    chapter: 'Data Architecture',
    question: 'Data-as-a-Service (DaaS) is a strategy that focuses on:',
    options: [
      'Selling raw data to third parties',
      'Providing data to users via an API or service interface',
      'Backing up data to the cloud',
      'Encrypting all data at rest'
    ],
    correctAnswer: 'Providing data to users via an API or service interface'
  },
  {
    id: 96,
    chapter: 'Data Architecture',
    question: 'The architecture principle of "separation of concerns" implies:',
    options: [
      'All data processing should happen in one monolithic application',
      'Different components of the architecture should have distinct responsibilities',
      'Data should not be shared between departments',
      'Users should not be concerned with data quality'
    ],
    correctAnswer: 'Different components of the architecture should have distinct responsibilities'
  },
  {
    id: 97,
    chapter: 'Data Architecture',
    question: 'A data fabric is an architecture that:',
    options: [
      'Physically moves all data to a single location',
      'Provides a unified, virtualized view of data across disparate systems',
      'Is only used for unstructured data',
      'Replaces the need for data governance'
    ],
    correctAnswer: 'Provides a unified, virtualized view of data across disparate systems'
  },
  {
    id: 98,
    chapter: 'Data Architecture',
    question: 'What is the role of a data architect?',
    options: [
      'To define the data standards, models, and blueprints for the enterprise',
      'To answer business questions using data',
      'To manage the helpdesk',
      'To reset user passwords'
    ],
    correctAnswer: 'To define the data standards, models, and blueprints for the enterprise'
  },
  {
    id: 99,
    chapter: 'Data Architecture',
    question: 'Which architectural pattern is often used for modern, scalable, and resilient cloud applications?',
    options: ['Monolithic architecture', 'Client-server architecture', 'Microservices architecture', 'Mainframe architecture'],
    correctAnswer: 'Microservices architecture'
  },
  {
    id: 100,
    chapter: 'Data Architecture',
    question: 'The concept of a "single version of the truth" is most closely associated with:',
    options: ['Data lakes', 'Operational systems', 'Data warehousing and master data management', 'Personal spreadsheets'],
    correctAnswer: 'Data warehousing and master data management'
  },
  {
    id: 101,
    chapter: 'Data Architecture',
    question: 'A key consideration when designing a data architecture is:',
    options: ['Scalability', 'Security', 'Performance', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 102,
    chapter: 'Data Architecture',
    question: 'What is data virtualization?',
    options: [
      'The process of physically copying data into a warehouse',
      'Creating a virtual machine',
      'Presenting data to users without physically moving or copying it',
      'Deleting data from a source system'
    ],
    correctAnswer: 'Presenting data to users without physically moving or copying it'
  },
  {
    id: 103,
    chapter: 'Data Architecture',
    question: 'An enterprise data model provides a:',
    options: [
      'A model for a single application',
      'A holistic, consistent view of an organization\'s data',
      'A list of user access permissions',
      'A network diagram'
    ],
    correctAnswer: 'A holistic, consistent view of an organization\'s data'
  },
  {
    id: 104,
    chapter: 'Data Architecture',
    question: 'What is a major benefit of a cloud-based data architecture?',
    options: [
      'It is always less secure',
      'It requires significant upfront hardware investment',
      'It offers elasticity and pay-as-you-go pricing',
      'It is much slower than on-premise solutions'
    ],
    correctAnswer: 'It offers elasticity and pay-as-you-go pricing'
  },
  {
    id: 105,
    chapter: 'Data Architecture',
    question: 'The Inmon approach to data warehousing is also known as:',
    options: [
      'Bottom-up',
      'Top-down (Corporate Information Factory)',
      'Agile',
      'Virtual'
    ],
    correctAnswer: 'Top-down (Corporate Information Factory)'
  },
  
  // Data Modeling & Design (25 questions)
  {
    id: 106,
    chapter: 'Data Modeling & Design',
    question: 'Which data model is primarily intended for a business audience?',
    options: ['Physical Data Model', 'Logical Data Model', 'Conceptual Data Model', 'Internal Schema Model'],
    correctAnswer: 'Conceptual Data Model'
  },
  {
    id: 107,
    chapter: 'Data Modeling & Design',
    question: 'The process of reducing data redundancy and improving data integrity in a relational database is called:',
    options: ['Denormalization', 'Normalization', 'Aggregation', 'Virtualization'],
    correctAnswer: 'Normalization'
  },
  {
    id: 108,
    chapter: 'Data Modeling & Design',
    question: 'In a relational model, a relationship between two tables is established using a:',
    options: ['Primary Key and Foreign Key', 'View', 'Index', 'Stored Procedure'],
    correctAnswer: 'Primary Key and Foreign Key'
  },
  {
    id: 109,
    chapter: 'Data Modeling & Design',
    question: 'A model that includes tables, columns, data types, and indexes is a:',
    options: ['Conceptual Data Model', 'Logical Data Model', 'Physical Data Model', 'Business Process Model'],
    correctAnswer: 'Physical Data Model'
  },
  {
    id: 110,
    chapter: 'Data Modeling & Design',
    question: 'What does "cardinality" refer to in data modeling?',
    options: [
      'The number of columns in a table',
      'The relationship between entities (e.g., one-to-one, one-to-many)',
      'The data type of an attribute',
      'The name of the entity'
    ],
    correctAnswer: 'The relationship between entities (e.g., one-to-one, one-to-many)'
  },
  {
    id: 111,
    chapter: 'Data Modeling & Design',
    question: 'Third Normal Form (3NF) states that all attributes must be dependent on:',
    options: [
      'The key',
      'The whole key',
      'Nothing but the key (no transitive dependencies)',
      'A non-key attribute'
    ],
    correctAnswer: 'Nothing but the key (no transitive dependencies)'
  },
  {
    id: 112,
    chapter: 'Data Modeling & Design',
    question: 'A star schema, commonly used in data warehousing, consists of:',
    options: [
      'One large, denormalized table',
      'A central fact table surrounded by dimension tables',
      'A network of highly normalized tables',
      'Only dimension tables'
    ],
    correctAnswer: 'A central fact table surrounded by dimension tables'
  },
  {
    id: 113,
    chapter: 'Data Modeling & Design',
    question: 'What is an entity in an Entity-Relationship Diagram (ERD)?',
    options: [
      'A relationship between tables',
      'A person, place, object, event, or concept about which data is stored',
      'An attribute of a table',
      'A SQL query'
    ],
    correctAnswer: 'A person, place, object, event, or concept about which data is stored'
  },
  {
    id: 114,
    chapter: 'Data Modeling & Design',
    question: 'Denormalization is often used in data warehouses to:',
    options: [
      'Improve query performance',
      'Increase data redundancy',
      'Complicate the data model',
      'Reduce storage space'
    ],
    correctAnswer: 'Improve query performance'
  },
  {
    id: 115,
    chapter: 'Data Modeling & Design',
    question: 'A logical data model is:',
    options: [
      'Database-agnostic, showing entities, attributes, and relationships',
      'Tied to a specific database technology',
      'A high-level view for executives',
      'The same as the physical data model'
    ],
    correctAnswer: 'Database-agnostic, showing entities, attributes, and relationships'
  },
  {
    id: 116,
    chapter: 'Data Modeling & Design',
    question: 'A slowly changing dimension (SCD) is a technique used to:',
    options: [
      'Manage historical data in data warehouses',
      'Speed up transactional systems',
      'Delete old data',
      'Create new databases'
    ],
    correctAnswer: 'Manage historical data in data warehouses'
  },
  {
    id: 117,
    chapter: 'Data Modeling & Design',
    question: 'Which of the following is a NoSQL database model?',
    options: ['Relational Model', 'Document Store', 'Hierarchical Model', 'Network Model'],
    correctAnswer: 'Document Store'
  },
  {
    id: 118,
    chapter: 'Data Modeling & Design',
    question: 'A "surrogate key" is a:',
    options: [
      'Key made up of multiple columns from the source data (natural key)',
      'A system-generated, unique identifier with no business meaning',
      'A key that points to a different table (foreign key)',
      'A key that is not unique'
    ],
    correctAnswer: 'A system-generated, unique identifier with no business meaning'
  },
  {
    id: 119,
    chapter: 'Data Modeling & Design',
    question: 'What is the purpose of an associative entity (or bridge table)?',
    options: [
      'To represent a one-to-many relationship',
      'To resolve a many-to-many relationship',
      'To store summary data',
      'To create a conceptual model'
    ],
    correctAnswer: 'To resolve a many-to-many relationship'
  },
  {
    id: 120,
    chapter: 'Data Modeling & Design',
    question: 'A fact table in a star schema contains:',
    options: [
      'Descriptive attributes',
      'Foreign keys to dimension tables and numeric measures',
      'Only primary keys',
      'Hierarchical data'
    ],
    correctAnswer: 'Foreign keys to dimension tables and numeric measures'
  },
  {
    id: 121,
    chapter: 'Data Modeling & Design',
    question: 'Which modeling technique is typically used for Business Intelligence and analytics?',
    options: ['Entity-Relationship Modeling', 'Dimensional Modeling', 'Object-Oriented Modeling', 'Process Modeling'],
    correctAnswer: 'Dimensional Modeling'
  },
  {
    id: 122,
    chapter: 'Data Modeling & Design',
    question: 'First Normal Form (1NF) requires that:',
    options: [
      'There are no repeating groups or multi-valued columns',
      'There are no transitive dependencies',
      'There are no partial dependencies',
      'The model is completely denormalized'
    ],
    correctAnswer: 'There are no repeating groups or multi-valued columns'
  },
  {
    id: 123,
    chapter: 'Data Modeling & Design',
    question: 'A "snowflake schema" is a variation of a star schema where:',
    options: [
      'The fact table is normalized',
      'Dimension tables are normalized into multiple related tables',
      'There is only one table',
      'There are no fact tables'
    ],
    correctAnswer: 'Dimension tables are normalized into multiple related tables'
  },
  {
    id: 124,
    chapter: 'Data Modeling & Design',
    question: 'What is the role of a data modeler?',
    options: [
      'To write application code',
      'To translate business requirements into a formal data structure',
      'To administer the database server',
      'To design the user interface'
    ],
    correctAnswer: 'To translate business requirements into a formal data structure'
  },
  {
    id: 125,
    chapter: 'Data Modeling & Design',
    question: 'A column that can uniquely identify a row in a table is called a:',
    options: ['Foreign Key', 'Candidate Key', 'Super Key', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 126,
    chapter: 'Data Modeling & Design',
    question: 'The primary key chosen from the set of candidate keys is called the:',
    options: ['Primary Key', 'Alternate Key', 'Foreign Key', 'Composite Key'],
    correctAnswer: 'Primary Key'
  },
  {
    id: 127,
    chapter: 'Data Modeling & Design',
    question: 'An attribute that can be derived from another attribute (e.g., Age from Date of Birth) is a:',
    options: ['Simple Attribute', 'Composite Attribute', 'Derived Attribute', 'Multi-valued Attribute'],
    correctAnswer: 'Derived Attribute'
  },
  {
    id: 128,
    chapter: 'Data Modeling & Design',
    question: 'Which of the following describes a "junk dimension"?',
    options: [
      'A dimension with very poor quality data',
      'A dimension that combines several low-cardinality flags and indicators',
      'A very large dimension table',
      'A dimension that is no longer used'
    ],
    correctAnswer: 'A dimension that combines several low-cardinality flags and indicators'
  },
  {
    id: 129,
    chapter: 'Data Modeling & Design',
    question: 'A key advantage of using a standardized data modeling notation like IDEF1X or Crow\'s Foot is:',
    options: [
      'It makes the model run faster',
      'It provides a clear and unambiguous way to communicate the model\'s design',
      'It automatically generates the database',
      'It is required by law'
    ],
    correctAnswer: 'It provides a clear and unambiguous way to communicate the model\'s design'
  },
  {
    id: 130,
    chapter: 'Data Modeling & Design',
    question: 'The process of reviewing and validating a data model with stakeholders is called a:',
    options: ['Code review', 'Data model walkthrough', 'Performance test', 'Security audit'],
    correctAnswer: 'Data model walkthrough'
  },

  // Data Security (25 questions)
  {
    id: 131,
    chapter: 'Data Security',
    question: 'The three core principles of information security (CIA Triad) are:',
    options: [
      'Confidentiality, Integrity, Availability',
      'Control, Integrity, Audit',
      'Confidentiality, Information, Access',
      'Control, Information, Availability'
    ],
    correctAnswer: 'Confidentiality, Integrity, Availability'
  },
  {
    id: 132,
    chapter: 'Data Security',
    question: 'Which principle ensures that data is not altered or destroyed in an unauthorized manner?',
    options: ['Confidentiality', 'Integrity', 'Availability', 'Authenticity'],
    correctAnswer: 'Integrity'
  },
  {
    id: 133,
    chapter: 'Data Security',
    question: 'The process of converting data into a coded, unreadable format is called:',
    options: ['Authentication', 'Authorization', 'Encryption', 'Auditing'],
    correctAnswer: 'Encryption'
  },
  {
    id: 134,
    chapter: 'Data Security',
    question: 'What is the principle of least privilege?',
    options: [
      'Users should have access to all data by default',
      'Users should only be granted the minimum level of access necessary to perform their job functions',
      'Users should share passwords with their colleagues',
      'Only administrators should have access to data'
    ],
    correctAnswer: 'Users should only be granted the minimum level of access necessary to perform their job functions'
  },
  {
    id: 135,
    chapter: 'Data Security',
    question: 'The process of verifying the identity of a user is known as:',
    options: ['Authorization', 'Authentication', 'Auditing', 'Accounting'],
    correctAnswer: 'Authentication'
  },
  {
    id: 136,
    chapter: 'Data Security',
    question: 'Data masking is a technique used to:',
    options: [
      'Create a structurally similar but inauthentic version of an organization\'s data',
      'Encrypt the entire database',
      'Delete data permanently',
      'Back up data to an offsite location'
    ],
    correctAnswer: 'Create a structurally similar but inauthentic version of an organization\'s data'
  },
  {
    id: 137,
    chapter: 'Data Security',
    question: 'Role-Based Access Control (RBAC) is a method of:',
    options: [
      'Granting permissions to individual users',
      'Granting permissions based on a user\'s job role within an organization',
      'Encrypting data based on its role',
      'Auditing user roles'
    ],
    correctAnswer: 'Granting permissions based on a user\'s job role within an organization'
  },
  {
    id: 138,
    chapter: 'Data Security',
    question: 'Which of the following is a threat to data security?',
    options: ['Malware', 'Insider threats', 'Phishing', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 139,
    chapter: 'Data Security',
    question: 'The process of determining what actions a verified user is allowed to perform is:',
    options: ['Authentication', 'Authorization', 'Auditing', 'Accounting'],
    correctAnswer: 'Authorization'
  },
  {
    id: 140,
    chapter: 'Data Security',
    question: 'A data retention policy specifies:',
    options: [
      'How long data should be kept and when it should be destroyed',
      'Who can access the data',
      'How to back up the data',
      'How to encrypt the data'
    ],
    correctAnswer: 'How long data should be kept and when it should be destroyed'
  },
  {
    id: 141,
    chapter: 'Data Security',
    question: 'What is the purpose of a data security audit?',
    options: [
      'To write new security policies',
      'To systematically review and evaluate the effectiveness of security controls',
      'To grant access to new users',
      'To reset all user passwords'
    ],
    correctAnswer: 'To systematically review and evaluate the effectiveness of security controls'
  },
  {
    id: 142,
    chapter: 'Data Security',
    question: 'Personally Identifiable Information (PII) refers to:',
    options: [
      'Any data stored in a database',
      'Information that can be used to identify a specific individual',
      'Publicly available data',
      'Encrypted data'
    ],
    correctAnswer: 'Information that can be used to identify a specific individual'
  },
  {
    id: 143,
    chapter: 'Data Security',
    question: 'Symmetric encryption uses:',
    options: [
      'Two different keys (a public and a private key)',
      'The same key for both encryption and decryption',
      'No keys',
      'A key that changes with every transaction'
    ],
    correctAnswer: 'The same key for both encryption and decryption'
  },
  {
    id: 144,
    chapter: 'Data Security',
    question: 'A firewall is primarily used to:',
    options: [
      'Prevent viruses from infecting a computer',
      'Monitor and control incoming and outgoing network traffic',
      'Encrypt files on a hard drive',
      'Authenticate users'
    ],
    correctAnswer: 'Monitor and control incoming and outgoing network traffic'
  },
  {
    id: 145,
    chapter: 'Data Security',
    question: 'What is a "defense in depth" strategy?',
    options: [
      'Relying on a single, very strong security control',
      'Implementing multiple layers of security controls',
      'Focusing only on perimeter security',
      'Having no security controls'
    ],
    correctAnswer: 'Implementing multiple layers of security controls'
  },
  {
    id: 146,
    chapter: 'Data Security',
    question: 'Which regulation is primarily concerned with the protection of personal data for EU citizens?',
    options: ['SOX', 'HIPAA', 'GDPR', 'PCI DSS'],
    correctAnswer: 'GDPR'
  },
  {
    id: 147,
    chapter: 'Data Security',
    question: 'Tokenization is a security process that:',
    options: [
      'Replaces sensitive data with a non-sensitive equivalent, referred to as a "token"',
      'Grants a user a temporary access token',
      'Encrypts the entire database',
      'Is another name for data masking'
    ],
    correctAnswer: 'Replaces sensitive data with a non-sensitive equivalent, referred to as a "token"'
  },
  {
    id: 148,
    chapter: 'Data Security',
    question: 'An Intrusion Detection System (IDS) is designed to:',
    options: [
      'Prevent intrusions from occurring',
      'Detect malicious activity or policy violations and report on them',
      'Encrypt network traffic',
      'Manage user passwords'
    ],
    correctAnswer: 'Detect malicious activity or policy violations and report on them'
  },
  {
    id: 149,
    chapter: 'Data Security',
    question: 'The process of securely and permanently deleting data from a storage medium is called:',
    options: ['Data Archiving', 'Data Backup', 'Data Sanitization', 'Data Compression'],
    correctAnswer: 'Data Sanitization'
  },
  {
    id: 150,
    chapter: 'Data Security',
    question: 'What is a key difference between symmetric and asymmetric encryption?',
    options: [
      'Symmetric is faster; Asymmetric is slower',
      'Symmetric uses one key; Asymmetric uses two keys',
      'Asymmetric is better for key exchange',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    id: 151,
    chapter: 'Data Security',
    question: 'A Business Continuity Plan (BCP) focuses on:',
    options: [
      'Daily security operations',
      'Keeping business functions operational during and after a disaster',
      'Preventing phishing attacks',
      'Managing software licenses'
    ],
    correctAnswer: 'Keeping business functions operational during and after a disaster'
  },
  {
    id: 152,
    chapter: 'Data Security',
    question: 'The "Availability" component of the CIA triad ensures that:',
    options: [
      'Data is kept secret',
      'Data is accurate and trustworthy',
      'Data and systems are accessible to authorized users when needed',
      'All access to data is logged'
    ],
    correctAnswer: 'Data and systems are accessible to authorized users when needed'
  },
  {
    id: 153,
    chapter: 'Data Security',
    question: 'Data Loss Prevention (DLP) tools are used to:',
    options: [
      'Recover data after it has been lost',
      'Prevent unauthorized disclosure or exfiltration of sensitive data',
      'Encrypt data at rest',
      'Perform database backups'
    ],
    correctAnswer: 'Prevent unauthorized disclosure or exfiltration of sensitive data'
  },
  {
    id: 154,
    chapter: 'Data Security',
    question: 'Who is ultimately accountable for data security in an organization?',
    options: [
      'The IT helpdesk',
      'The network security team',
      'Senior leadership and management',
      'Individual data users'
    ],
    correctAnswer: 'Senior leadership and management'
  },
  {
    id: 155,
    chapter: 'Data Security',
    question: 'A security policy is a:',
    options: [
      'Technical configuration setting',
      'A high-level document that outlines an organization\'s security goals and procedures',
      'A list of firewall rules',
      'A daily security checklist'
    ],
    correctAnswer: 'A high-level document that outlines an organization\'s security goals and procedures'
  },
  
  // Master & Reference Data (25 questions)
  {
    id: 156,
    chapter: 'Reference & Master Data',
    question: 'What is Master Data?',
    options: [
      'Transactional data like sales or web clicks',
      'The key business entities around which transactions are executed (e.g., Customer, Product)',
      'Log files from a server',
      'A backup of a database'
    ],
    correctAnswer: 'The key business entities around which transactions are executed (e.g., Customer, Product)'
  },
  {
    id: 157,
    chapter: 'Reference & Master Data',
    question: 'Which of the following is an example of Reference Data?',
    options: [
      'A list of country codes',
      'A customer\'s name',
      'A daily sales total',
      'An employee\'s salary'
    ],
    correctAnswer: 'A list of country codes'
  },
  {
    id: 158,
    chapter: 'Reference & Master Data',
    question: 'The primary goal of Master Data Management (MDM) is to:',
    options: [
      'Create a single, authoritative source of truth for key business entities',
      'Build analytical reports',
      'Manage network security',
      'Purchase new hardware'
    ],
    correctAnswer: 'Create a single, authoritative source of truth for key business entities'
  },
  {
    id: 159,
    chapter: 'Reference & Master Data',
    question: 'Which is a common MDM implementation style?',
    options: ['Registry Style', 'Consolidation Style', 'Centralized Style', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 160,
    chapter: 'Reference & Master Data',
    question: 'In which MDM style is a "golden record" created and used to update source systems?',
    options: [
      'Registry Style',
      'Consolidation Style',
      'Co-existence Style (Transactional Hub)',
      'Analytical Style'
    ],
    correctAnswer: 'Co-existence Style (Transactional Hub)'
  },
  {
    id: 161,
    chapter: 'Reference & Master Data',
    question: 'A key challenge that MDM aims to solve is:',
    options: [
      'Data silos and inconsistent master data across the enterprise',
      'Slow network performance',
      'Lack of reporting software',
      'Too much storage space'
    ],
    correctAnswer: 'Data silos and inconsistent master data across the enterprise'
  },
  {
    id: 162,
    chapter: 'Reference & Master Data',
    question: 'Reference data is typically characterized by:',
    options: [
      'High volume and high rate of change',
      'Low volume and infrequent changes',
      'Being unstructured',
      'Containing sensitive PII'
    ],
    correctAnswer: 'Low volume and infrequent changes'
  },
  {
    id: 163,
    chapter: 'Reference & Master Data',
    question: 'Which MDM style provides a read-only, unified view of master data, typically for analytics?',
    options: ['Registry Style', 'Consolidation Style', 'Centralized Style', 'Transactional Style'],
    correctAnswer: 'Consolidation Style'
  },
  {
    id: 164,
    chapter: 'Reference & Master Data',
    question: 'What is a "golden record" in MDM?',
    options: [
      'The first record ever created in a system',
      'The most accurate and complete version of a master data entity',
      'A record that has been backed up',
      'A record that is scheduled for deletion'
    ],
    correctAnswer: 'The most accurate and complete version of a master data entity'
  },
  {
    id: 165,
    chapter: 'Reference & Master Data',
    question: 'Which of the following is a master data domain?',
    options: ['Product', 'Customer', 'Supplier', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 166,
    chapter: 'Reference & Master Data',
    question: 'The process of linking and merging records from different sources that represent the same entity is called:',
    options: ['Data profiling', 'Data validation', 'Matching and merging', 'Data archiving'],
    correctAnswer: 'Matching and merging'
  },
  {
    id: 167,
    chapter: 'Reference & Master Data',
    question: 'A hierarchy in master data describes:',
    options: [
      'The relationships between parent and child entities (e.g., product categories)',
      'The security level of the data',
      'The age of the data',
      'The physical location of the data'
    ],
    correctAnswer: 'The relationships between parent and child entities (e.g., product categories)'
  },
  {
    id: 168,
    chapter: 'Reference & Master Data',
    question: 'Data stewardship is a critical component of a successful MDM program because:',
    options: [
      'Stewards are responsible for defining and maintaining the quality of master data',
      'Stewards write the code for the MDM hub',
      'Stewards manage the network hardware',
      'It is not a critical component'
    ],
    correctAnswer: 'Stewards are responsible for defining and maintaining the quality of master data'
  },
  {
    id: 169,
    chapter: 'Reference & Master Data',
    question: 'Which MDM style involves creating a centralized system where master data is created and maintained?',
    options: ['Registry Style', 'Consolidation Style', 'Centralized (Authoritative) Style', 'Analytical Style'],
    correctAnswer: 'Centralized (Authoritative) Style'
  },
  {
    id: 170,
    chapter: 'Reference & Master Data',
    question: '"Chart of Accounts" is an example of what type of data?',
    options: ['Master Data', 'Transactional Data', 'Reference Data', 'Unstructured Data'],
    correctAnswer: 'Reference Data'
  },
  {
    id: 171,
    chapter: 'Reference & Master Data',
    question: 'A major business driver for MDM is:',
    options: [
      'The need for a 360-degree view of the customer',
      'The desire to buy new servers',
      'A requirement to change the company logo',
      'A policy to reduce travel expenses'
    ],
    correctAnswer: 'The need for a 360-degree view of the customer'
  },
  {
    id: 172,
    chapter: 'Reference & Master Data',
    question: 'External reference data refers to:',
    options: [
      'Data created and managed within the organization',
      'Standardized code sets and data provided by external bodies (e.g., ISO, postal services)',
      'Backup copies of internal data',
      'Transactional data from a partner'
    ],
    correctAnswer: 'Standardized code sets and data provided by external bodies (e.g., ISO, postal services)'
  },
  {
    id: 173,
    chapter: 'Reference & Master Data',
    question: 'What is a key difference between Master Data and Transactional Data?',
    options: [
      'Master data is high-volume and volatile; transactional data is low-volume and stable',
      'Master data describes business entities; transactional data describes business events',
      'There is no difference',
      'Master data is unstructured; transactional data is structured'
    ],
    correctAnswer: 'Master data describes business entities; transactional data describes business events'
  },
  {
    id: 174,
    chapter: 'Reference & Master Data',
    question: 'The Registry MDM style is best described as:',
    options: [
      'A system that physically consolidates all master data',
      'A hub that maintains a centralized key and pointers to master data in source systems',
      'A system where master data is created and maintained centrally',
      'A system that only handles reference data'
    ],
    correctAnswer: 'A hub that maintains a centralized key and pointers to master data in source systems'
  },
  {
    id: 175,
    chapter: 'Reference & Master Data',
    question: 'An MDM solution typically includes capabilities for:',
    options: ['Data modeling', 'Data quality and cleansing', 'Workflow and stewardship', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 176,
    chapter: 'Reference & Master Data',
    question: 'Which of these is NOT typically considered master data?',
    options: ['Customer', 'Product', 'Employee', 'A specific sales invoice'],
    correctAnswer: 'A specific sales invoice'
  },
  {
    id: 177,
    chapter: 'Reference & Master Data',
    question: 'The governance of master and reference data is essential for:',
    options: [
      'Ensuring its quality, consistency, and accuracy over time',
      'Increasing the amount of data stored',
      'Making data more difficult to access',
      'Eliminating the need for data security'
    ],
    correctAnswer: 'Ensuring its quality, consistency, and accuracy over time'
  },
  {
    id: 178,
    chapter: 'Reference & Master Data',
    question: 'A successful MDM implementation requires strong collaboration between:',
    options: [
      'Business and IT stakeholders',
      'Only the IT department',
      'Only the business departments',
      'Only external consultants'
    ],
    correctAnswer: 'Business and IT stakeholders'
  },
  {
    id: 179,
    chapter: 'Reference & Master Data',
    question: 'Which is a key technology for managing reference data?',
    options: [
      'A Reference Data Management (RDM) tool',
      'A word processor',
      'A web browser',
      'An email client'
    ],
    correctAnswer: 'A Reference Data Management (RDM) tool'
  },
  {
    id: 180,
    chapter: 'Reference & Master Data',
    question: 'Why is it important to manage hierarchies within MDM?',
    options: [
      'They support reporting, aggregation, and analytics',
      'They are required for database backups',
      'They improve network speed',
      'They are not important to manage'
    ],
    correctAnswer: 'They support reporting, aggregation, and analytics'
  },
  
  // Data Warehousing & BI (25 questions)
  {
    id: 181,
    chapter: 'Data Warehousing & BI',
    question: 'A data warehouse is best described as:',
    options: [
      'A database used for online transaction processing (OLTP)',
      'A subject-oriented, integrated, time-variant, non-volatile collection of data for decision support',
      'A system for storing unstructured data',
      'A temporary staging area for data'
    ],
    correctAnswer: 'A subject-oriented, integrated, time-variant, non-volatile collection of data for decision support'
  },
  {
    id: 182,
    chapter: 'Data Warehousing & BI',
    question: 'What does "non-volatile" mean in the context of a data warehouse?',
    options: [
      'Data is constantly changing',
      'Data, once loaded, is not typically updated or deleted; it is historical',
      'The data is stored in volatile memory (RAM)',
      'The data is of poor quality'
    ],
    correctAnswer: 'Data, once loaded, is not typically updated or deleted; it is historical'
  },
  {
    id: 183,
    chapter: 'Data Warehousing & BI',
    question: 'The process of extracting data from source systems, transforming it, and loading it into a data warehouse is called:',
    options: ['OLAP', 'OLTP', 'ETL', 'SQL'],
    correctAnswer: 'ETL'
  },
  {
    id: 184,
    chapter: 'Data Warehousing & BI',
    question: 'Business Intelligence (BI) refers to:',
    options: [
      'The raw data stored in a database',
      'The technologies, applications, and practices for the collection, integration, analysis, and presentation of business information',
      'The process of data entry',
      'The physical hardware of a server'
    ],
    correctAnswer: 'The technologies, applications, and practices for the collection, integration, analysis, and presentation of business information'
  },
  {
    id: 185,
    chapter: 'Data Warehousing & BI',
    question: 'OLAP stands for:',
    options: [
      'Online Transaction Processing',
      'Online Analytical Processing',
      'Online Application Protocol',
      'Online Algorithm Platform'
    ],
    correctAnswer: 'Online Analytical Processing'
  },
  {
    id: 186,
    chapter: 'Data Warehousing & BI',
    question: 'A key characteristic of a dimensional model (star schema) is:',
    options: [
      'It is highly normalized',
      'It is optimized for complex queries and end-user understandability',
      'It is designed for fast transaction processing',
      'It contains no numeric data'
    ],
    correctAnswer: 'It is optimized for complex queries and end-user understandability'
  },
  {
    id: 187,
    chapter: 'Data Warehousing & BI',
    question: 'What is a "fact" in a dimensional model?',
    options: [
      'A descriptive attribute like a customer name or product color',
      'A numeric measurement of a business process (e.g., Sales Amount, Quantity Sold)',
      'A table containing hierarchical data',
      'A slowly changing dimension'
    ],
    correctAnswer: 'A numeric measurement of a business process (e.g., Sales Amount, Quantity Sold)'
  },
  {
    id: 188,
    chapter: 'Data Warehousing & BI',
    question: 'The "slice and dice" capability in OLAP allows users to:',
    options: [
      'Delete data from the warehouse',
      'Look at data from different viewpoints and levels of detail',
      'Write complex ETL code',
      'Administer the database'
    ],
    correctAnswer: 'Look at data from different viewpoints and levels of detail'
  },
  {
    id: 189,
    chapter: 'Data Warehousing & BI',
    question: 'What is a data mart?',
    options: [
      'An enterprise-wide data warehouse',
      'A smaller, focused subset of a data warehouse for a specific department or subject area',
      'A transactional system',
      'A metadata repository'
    ],
    correctAnswer: 'A smaller, focused subset of a data warehouse for a specific department or subject area'
  },
  {
    id: 190,
    chapter: 'Data Warehousing & BI',
    question: 'The Kimball approach to data warehousing advocates for:',
    options: [
      'A top-down, centralized approach',
      'A bottom-up approach using conformed dimensions and data marts',
      'Avoiding dimensional modeling',
      'Using only highly normalized models'
    ],
    correctAnswer: 'A bottom-up approach using conformed dimensions and data marts'
  },
  {
    id: 191,
    chapter: 'Data Warehousing & BI',
    question: 'A staging area in an ETL process is used to:',
    options: [
      'Store the final, clean data for reporting',
      'Temporarily hold and process data extracted from source systems before loading',
      'Host the BI reporting tool',
      'Archive old data'
    ],
    correctAnswer: 'Temporarily hold and process data extracted from source systems before loading'
  },
  {
    id: 192,
    chapter: 'Data Warehousing & BI',
    question: 'What is a dashboard in the context of BI?',
    options: [
      'A database table',
      'A visual display of the most important information needed to achieve one or more objectives, consolidated on a single screen',
      'An ETL script',
      'A server configuration file'
    ],
    correctAnswer: 'A visual display of the most important information needed to achieve one or more objectives, consolidated on a single screen'
  },
  {
    id: 193,
    chapter: 'Data Warehousing & BI',
    question: '"Drill-down" is an OLAP operation that allows a user to:',
    options: [
      'Navigate from summary data to more detailed data',
      'Aggregate data to a higher level',
      'View data from a different dimension',
      'Delete the underlying data'
    ],
    correctAnswer: 'Navigate from summary data to more detailed data'
  },
  {
    id: 194,
    chapter: 'Data Warehousing & BI',
    question: '"Time-variant" in the definition of a data warehouse means:',
    options: [
      'The data is only available at certain times of the day',
      'The data in the warehouse represents a long time horizon and is associated with a specific point in time',
      'The data changes constantly',
      'The data is real-time'
    ],
    correctAnswer: 'The data in the warehouse represents a long time horizon and is associated with a specific point in time'
  },
  {
    id: 195,
    chapter: 'Data Warehousing & BI',
    question: 'What is "self-service BI"?',
    options: [
      'A BI system that requires IT to build every report',
      'An approach that enables business users to access and analyze data without involving IT',
      'A BI tool that has no user interface',
      'A type of database'
    ],
    correctAnswer: 'An approach that enables business users to access and analyze data without involving IT'
  },
  {
    id: 196,
    chapter: 'Data Warehousing & BI',
    question: 'A "conformed dimension" is a dimension that:',
    options: [
      'Is used in only one data mart',
      'Has a different meaning in different data marts',
      'Has a consistent meaning and content across multiple fact tables or data marts',
      'Contains only numeric data'
    ],
    correctAnswer: 'Has a consistent meaning and content across multiple fact tables or data marts'
  },
  {
    id: 197,
    chapter: 'Data Warehousing & BI',
    question: 'ELT (Extract, Load, Transform) differs from ETL in that:',
    options: [
      'It does not have a transformation step',
      'The transformation step is performed after loading the data into the target system',
      'It is an older, outdated methodology',
      'It can only be used with unstructured data'
    ],
    correctAnswer: 'The transformation step is performed after loading the data into the target system'
  },
  {
    id: 198,
    chapter: 'Data Warehousing & BI',
    question: 'Which of the following is an example of a Key Performance Indicator (KPI)?',
    options: [
      'The name of a customer',
      'The number of employees in the company',
      'Year-over-year sales growth percentage',
      'The brand of the company\'s computers'
    ],
    correctAnswer: 'Year-over-year sales growth percentage'
  },
  {
    id: 199,
    chapter: 'Data Warehousing & BI',
    question: 'What is the purpose of an OLAP cube?',
    options: [
      'To store transactional data',
      'To pre-calculate and store data in a multi-dimensional array for fast query performance',
      'To encrypt data',
      'To back up the data warehouse'
    ],
    correctAnswer: 'To pre-calculate and store data in a multi-dimensional array for fast query performance'
  },
  {
    id: 200,
    chapter: 'Data Warehousing & BI',
    question: 'The granularity of a fact table refers to:',
    options: [
      'The physical size of the table',
      'The level of detail represented by a single row in the table',
      'The number of dimensions it has',
      'The tool used to query the table'
    ],
    correctAnswer: 'The level of detail represented by a single row in the table'
  },
  {
    id: 201,
    chapter: 'Data Warehousing & BI',
    question: 'Ad-hoc analysis refers to:',
    options: [
      'Running pre-built, standardized reports',
      'Users creating their own queries and reports to answer specific, often one-time, business questions',
      'The process of loading data into the warehouse',
      'The process of data modeling'
    ],
    correctAnswer: 'Users creating their own queries and reports to answer specific, often one-time, business questions'
  },
  {
    id: 202,
    chapter: 'Data Warehousing & BI',
    question: 'A "factless fact table" is used to:',
    options: [
      'Store descriptive attributes',
      'Track an event or the coverage of a process (e.g., student attendance)',
      'Store summary data',
      'It is not a valid concept'
    ],
    correctAnswer: 'Track an event or the coverage of a process (e.g., student attendance)'
  },
  {
    id: 203,
    chapter: 'Data Warehousing & BI',
    question: 'What is the primary purpose of a data warehouse?',
    options: [
      'To support day-to-day business operations',
      'To support strategic and tactical decision-making',
      'To process a high volume of concurrent transactions',
      'To replace all other databases in the organization'
    ],
    correctAnswer: 'To support strategic and tactical decision-making'
  },
  {
    id: 204,
    chapter: 'Data Warehousing & BI',
    question: 'Data mining is the process of:',
    options: [
      'Manually searching for specific records in a database',
      'Discovering patterns and knowledge from large amounts of data',
      'Deleting unnecessary data',
      'Creating data entry forms'
    ],
    correctAnswer: 'Discovering patterns and knowledge from large amounts of data'
  },
  {
    id: 205,
    chapter: 'Data Warehousing & BI',
    question: 'Which of the following is a leading BI and analytics platform?',
    options: ['Tableau', 'Power BI', 'Qlik', 'All of the above'],
    correctAnswer: 'All of the above'
  },

  // Data Integration & Interoperability (25 questions)
  {
    id: 206,
    chapter: 'Data Integration',
    question: 'Data Integration is the process of:',
    options: [
      'Separating data into different databases',
      'Combining data from different sources to provide a unified view',
      'Deleting duplicate data',
      'Creating reports'
    ],
    correctAnswer: 'Combining data from different sources to provide a unified view'
  },
  {
    id: 207,
    chapter: 'Data Integration',
    question: 'The ETL process stands for:',
    options: [
      'Extract, Transform, Load',
      'Execute, Test, Launch',
      'Enter, Transmit, Log',
      'Extract, Test, Load'
    ],
    correctAnswer: 'Extract, Transform, Load'
  },
  {
    id: 208,
    chapter: 'Data Integration',
    question: 'What happens during the "Transform" step of ETL?',
    options: [
      'Data is pulled from the source system',
      'Data is loaded into the target data warehouse',
      'Data is cleansed, standardized, and conformed to the target model',
      'The source system is backed up'
    ],
    correctAnswer: 'Data is cleansed, standardized, and conformed to the target model'
  },
  {
    id: 209,
    chapter: 'Data Integration',
    question: 'An Enterprise Service Bus (ESB) is a technology used to:',
    options: [
      'Store master data',
      'Facilitate communication and integration between applications as a central bus',
      'Create analytical reports',
      'Manage user security'
    ],
    correctAnswer: 'Facilitate communication and integration between applications as a central bus'
  },
  {
    id: 210,
    chapter: 'Data Integration',
    question: 'Change Data Capture (CDC) is a technique used to:',
    options: [
      'Capture all data from a source table every time',
      'Identify and capture only the data that has changed since the last integration',
      'Change the data types in a database',
      'Capture user interface changes'
    ],
    correctAnswer: 'Identify and capture only the data that has changed since the last integration'
  },
  {
    id: 211,
    chapter: 'Data Integration',
    question: 'What is an API (Application Programming Interface)?',
    options: [
      'A database table',
      'A graphical user interface',
      'A set of rules and tools for building software and applications, allowing them to communicate with each other',
      'A network firewall'
    ],
    correctAnswer: 'A set of rules and tools for building software and applications, allowing them to communicate with each other'
  },
  {
    id: 212,
    chapter: 'Data Integration',
    question: 'Data virtualization is a form of data integration that:',
    options: [
      'Physically moves all data into a central repository',
      'Creates an abstract data layer that provides a unified view without moving the data',
      'Requires all data to be in the same format',
      'Is only used for batch processing'
    ],
    correctAnswer: 'Creates an abstract data layer that provides a unified view without moving the data'
  },
  {
    id: 213,
    chapter: 'Data Integration',
    question: 'Which of the following is a common data format for APIs?',
    options: ['JSON', 'XML', 'CSV', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 214,
    chapter: 'Data Integration',
    question: 'The ELT (Extract, Load, Transform) approach is common in which environment?',
    options: [
      'Legacy mainframe systems',
      'Cloud data warehouses and big data platforms',
      'Desktop databases like MS Access',
      'Small departmental applications'
    ],
    correctAnswer: 'Cloud data warehouses and big data platforms'
  },
  {
    id: 215,
    chapter: 'Data Integration',
    question: 'Point-to-point integration becomes difficult to manage when:',
    options: [
      'There are only two systems to integrate',
      'The number of systems and integrations grows large',
      'A standardized data format is used',
      'An ESB is used'
    ],
    correctAnswer: 'The number of systems and integrations grows large'
  },
  {
    id: 216,
    chapter: 'Data Integration',
    question: 'What is data federation?',
    options: [
      'Another term for data replication',
      'A form of data virtualization where a single query can be executed across multiple data sources',
      'The process of securing data',
      'The process of deleting data'
    ],
    correctAnswer: 'A form of data virtualization where a single query can be executed across multiple data sources'
  },
  {
    id: 217,
    chapter: 'Data Integration',
    question: 'A message queue is a technology that allows:',
    options: [
      'Asynchronous communication between systems',
      'Users to send instant messages to each other',
      'The storage of large video files',
      'Real-time video streaming'
    ],
    correctAnswer: 'Asynchronous communication between systems'
  },
  {
    id: 218,
    chapter: 'Data Integration',
    question: 'What is a major challenge in data integration?',
    options: [
      'Semantic heterogeneity (data from different sources having different meanings)',
      'Lack of available data',
      'Systems being too similar',
      'Having too much documentation'
    ],
    correctAnswer: 'Semantic heterogeneity (data from different sources having different meanings)'
  },
  {
    id: 219,
    chapter: 'Data Integration',
    question: 'Data interoperability refers to the ability of:',
    options: [
      'A single system to work in isolation',
      'Different systems and organizations to exchange and make use of information',
      'A user to operate a computer',
      'A database to store data'
    ],
    correctAnswer: 'Different systems and organizations to exchange and make use of information'
  },
  {
    id: 220,
    chapter: 'Data Integration',
    question: 'A canonical data model is often used in data integration to:',
    options: [
      'Create a unique model for each integration point',
      'Provide a standard, neutral data format to reduce the number of direct transformations needed',
      'Increase the complexity of transformations',
      'Store transactional data'
    ],
    correctAnswer: 'Provide a standard, neutral data format to reduce the number of direct transformations needed'
  },
  {
    id: 221,
    chapter: 'Data Integration',
    question: 'Which of the following describes batch data integration?',
    options: [
      'Data is processed and moved continuously in real-time',
      'Data is moved in discrete, scheduled chunks',
      'Data is never moved',
      'Data is entered manually by users'
    ],
    correctAnswer: 'Data is moved in discrete, scheduled chunks'
  },
  {
    id: 222,
    chapter: 'Data Integration',
    question: 'REST (Representational State Transfer) is a popular architectural style for:',
    options: ['Building networkable APIs', 'Designing databases', 'Managing data quality', 'Creating data models'],
    correctAnswer: 'Building networkable APIs'
  },
  {
    id: 223,
    chapter: 'Data Integration',
    question: 'What is a data pipeline?',
    options: [
      'A physical pipe for carrying data cables',
      'A series of data processing steps that moves data from a source to a destination',
      'A user interface for a reporting tool',
      'A security protocol'
    ],
    correctAnswer: 'A series of data processing steps that moves data from a source to a destination'
  },
  {
    id: 224,
    chapter: 'Data Integration',
    question: 'Data cleansing is often a critical part of the integration process because:',
    options: [
      'Source systems often have inconsistent or poor quality data',
      'It is a legal requirement in all countries',
      'It makes the data transfer take longer',
      'It is not a critical part of the process'
    ],
    correctAnswer: 'Source systems often have inconsistent or poor quality data'
  },
  {
    id: 225,
    chapter: 'Data Integration',
    question: 'The hub-and-spoke integration model involves:',
    options: [
      'Connecting every system directly to every other system',
      'A central hub that connects to all other systems (spokes)',
      'No integration between systems',
      'Only two systems connected together'
    ],
    correctAnswer: 'A central hub that connects to all other systems (spokes)'
  },
  {
    id: 226,
    chapter: 'Data Integration',
    question: 'Which of the following is a common data integration tool?',
    options: ['Informatica PowerCenter', 'Talend', 'Microsoft SSIS', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 227,
    chapter: 'Data Integration',
    question: 'Data replication involves:',
    options: [
      'Creating a single unified view without moving data',
      'Copying data from one database or system to another',
      'Deleting data from a source system',
      'Transforming data into a new format'
    ],
    correctAnswer: 'Copying data from one database or system to another'
  },
  {
    id: 228,
    chapter: 'Data Integration',
    question: 'iPaaS (Integration Platform as a Service) is a:',
    options: [
      'Cloud-based service for application and data integration',
      'On-premise software for managing integrations',
      'A type of database',
      'A data modeling methodology'
    ],
    correctAnswer: 'Cloud-based service for application and data integration'
  },
  {
    id: 229,
    chapter: 'Data Integration',
    question: 'What is the primary benefit of Change Data Capture (CDC)?',
    options: [
      'It increases the load on source systems',
      'It reduces the amount of data that needs to be processed in each integration cycle',
      'It requires a full table scan every time',
      'It only works for unstructured data'
    ],
    correctAnswer: 'It reduces the amount of data that needs to be processed in each integration cycle'
  },
  {
    id: 230,
    chapter: 'Data Integration',
    question: 'Which is a key consideration for real-time data integration?',
    options: ['Latency', 'Throughput', 'Reliability', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  
  // Data Storage & Operations (25 questions)
  {
    id: 231,
    chapter: 'Data Storage & Operations',
    question: 'A relational database management system (RDBMS) stores data in:',
    options: ['Key-value pairs', 'Documents', 'Tables with rows and columns', 'Graphs'],
    correctAnswer: 'Tables with rows and columns'
  },
  {
    id: 232,
    chapter: 'Data Storage & Operations',
    question: 'SQL stands for:',
    options: [
      'Standard Query Language',
      'Structured Query Language',
      'Simple Query Language',
      'System Query Language'
    ],
    correctAnswer: 'Structured Query Language'
  },
  {
    id: 233,
    chapter: 'Data Storage & Operations',
    question: 'The process of creating a copy of data for recovery purposes is called:',
    options: ['Replication', 'Archiving', 'Backup', 'Clustering'],
    correctAnswer: 'Backup'
  },
  {
    id: 234,
    chapter: 'Data Storage & Operations',
    question: 'Which of the following is a NoSQL database type?',
    options: ['Document Store', 'Column-Family Store', 'Key-Value Store', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 235,
    chapter: 'Data Storage & Operations',
    question: 'The role responsible for the installation, configuration, and maintenance of databases is the:',
    options: ['Data Steward', 'Data Architect', 'Database Administrator (DBA)', 'Business Analyst'],
    correctAnswer: 'Database Administrator (DBA)'
  },
  {
    id: 236,
    chapter: 'Data Storage & Operations',
    question: 'What is the purpose of a database index?',
    options: [
      'To enforce data security',
      'To improve the speed of data retrieval operations',
      'To store large binary files',
      'To log database transactions'
    ],
    correctAnswer: 'To improve the speed of data retrieval operations'
  },
  {
    id: 237,
    chapter: 'Data Storage & Operations',
    question: 'ACID properties (Atomicity, Consistency, Isolation, Durability) are a key feature of:',
    options: [
      'Data lakes',
      'Transactional database systems (OLTP)',
      'File systems',
      'Data streaming platforms'
    ],
    correctAnswer: 'Transactional database systems (OLTP)'
  },
  {
    id: 238,
    chapter: 'Data Storage & Operations',
    question: 'Moving data that is no longer actively used to a separate, long-term storage device is called:',
    options: ['Data backup', 'Data replication', 'Data archiving', 'Data cleansing'],
    correctAnswer: 'Data archiving'
  },
  {
    id: 239,
    chapter: 'Data Storage & Operations',
    question: 'What is database sharding?',
    options: [
      'A type of database index',
      'A method of horizontally partitioning a database into smaller, more manageable pieces',
      'The process of encrypting a database',
      'The process of creating a full backup'
    ],
    correctAnswer: 'A method of horizontally partitioning a database into smaller, more manageable pieces'
  },
  {
    id: 240,
    chapter: 'Data Storage & Operations',
    question: 'Which of the following is a cloud-based database service?',
    options: ['Amazon RDS', 'Azure SQL Database', 'Google Cloud SQL', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 241,
    chapter: 'Data Storage & Operations',
    question: 'A database transaction is:',
    options: [
      'A financial payment for a database license',
      'A single logical unit of work, which may consist of multiple operations',
      'A query that retrieves data',
      'A security vulnerability'
    ],
    correctAnswer: 'A single logical unit of work, which may consist of multiple operations'
  },
  {
    id: 242,
    chapter: 'Data Storage & Operations',
    question: 'The "Durability" property in ACID ensures that:',
    options: [
      'Transactions are all-or-nothing',
      'The database remains in a consistent state',
      'Concurrent transactions do not interfere with each other',
      'Once a transaction is committed, it will remain so, even in the event of a power loss'
    ],
    correctAnswer: 'Once a transaction is committed, it will remain so, even in the event of a power loss'
  },
  {
    id: 243,
    chapter: 'Data Storage & Operations',
    question: 'What is a database schema?',
    options: [
      'The raw data in the tables',
      'The logical structure or blueprint of the database',
      'A specific SQL query',
      'A user account'
    ],
    correctAnswer: 'The logical structure or blueprint of the database'
  },
  {
    id: 244,
    chapter: 'Data Storage & Operations',
    question: 'A database view is a:',
    options: [
      'Physical copy of a table',
      'Saved SQL query that can be treated like a virtual table',
      'Backup of the database',
      'Log of all database activity'
    ],
    correctAnswer: 'Saved SQL query that can be treated like a virtual table'
  },
  {
    id: 245,
    chapter: 'Data Storage & Operations',
    question: 'Which activity is part of database performance tuning?',
    options: ['Query optimization', 'Index management', 'Hardware configuration', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 246,
    chapter: 'Data Storage & Operations',
    question: 'What is a key benefit of NoSQL databases compared to relational databases?',
    options: [
      'They provide strong ACID guarantees',
      'They are better for highly structured, tabular data',
      'They offer greater scalability and flexibility for unstructured or semi-structured data',
      'They use SQL as their primary query language'
    ],
    correctAnswer: 'They offer greater scalability and flexibility for unstructured or semi-structured data'
  },
  {
    id: 247,
    chapter: 'Data Storage & Operations',
    question: 'A Disaster Recovery (DR) plan outlines procedures to:',
    options: [
      'Perform routine database maintenance',
      'Recover and protect a business\'s IT infrastructure in the event of a disaster',
      'Onboard new employees',
      'Optimize SQL queries'
    ],
    correctAnswer: 'Recover and protect a business\'s IT infrastructure in the event of a disaster'
  },
  {
    id: 248,
    chapter: 'Data Storage & Operations',
    question: 'The CAP theorem states that a distributed data store can only provide two of which three guarantees?',
    options: [
      'Confidentiality, Integrity, Availability',
      'Consistency, Availability, Partition Tolerance',
      'Atomicity, Consistency, Isolation',
      'Backup, Recovery, Archiving'
    ],
    correctAnswer: 'Consistency, Availability, Partition Tolerance'
  },
  {
    id: 249,
    chapter: 'Data Storage & Operations',
    question: 'A clustered database architecture is used to:',
    options: [
      'Improve data security',
      'Improve availability and scalability',
      'Reduce storage costs',
      'Simplify database administration'
    ],
    correctAnswer: 'Improve availability and scalability'
  },
  {
    id: 250,
    chapter: 'Data Storage & Operations',
    question: 'What does "data at rest" refer to?',
    options: [
      'Data that is actively moving across a network',
      'Data that is stored on a physical medium like a disk or tape',
      'Data that is being processed in memory',
      'Data that has been deleted'
    ],
    correctAnswer: 'Data that is stored on a physical medium like a disk or tape'
  },
  {
    id: 251,
    chapter: 'Data Storage & Operations',
    question: 'A storage area network (SAN) is a:',
    options: [
      'Type of local area network',
      'A dedicated network that provides access to consolidated, block-level data storage',
      'A cloud storage service',
      'A database backup utility'
    ],
    correctAnswer: 'A dedicated network that provides access to consolidated, block-level data storage'
  },
  {
    id: 252,
    chapter: 'Data Storage & Operations',
    question: 'Which SQL command is used to retrieve data from a database?',
    options: ['INSERT', 'UPDATE', 'DELETE', 'SELECT'],
    correctAnswer: 'SELECT'
  },
  {
    id: 253,
    chapter: 'Data Storage & Operations',
    question: 'A database log file is crucial for:',
    options: [
      'Improving query speed',
      'Point-in-time recovery and auditing',
      'Storing user interface elements',
      'Defining the database schema'
    ],
    correctAnswer: 'Point-in-time recovery and auditing'
  },
  {
    id: 254,
    chapter: 'Data Storage & Operations',
    question: 'An in-memory database stores data primarily in:',
    options: ['Hard disk drives (HDD)', 'Solid-state drives (SSD)', 'Main memory (RAM)', 'Tape backups'],
    correctAnswer: 'Main memory (RAM)'
  },
  {
    id: 255,
    chapter: 'Data Storage & Operations',
    question: 'What is a primary goal of data lifecycle management?',
    options: [
      'To keep all data forever, regardless of its value',
      'To manage data from creation to deletion based on its business value and retention policies',
      'To ensure all data is stored in a single database',
      'To give all users access to all data'
    ],
    correctAnswer: 'To manage data from creation to deletion based on its business value and retention policies'
  },

  // Big Data & Data Science (25 questions)
  {
    id: 256,
    chapter: 'Big Data & Data Science',
    question: 'The "Three Vs" of Big Data are typically defined as:',
    options: [
      'Volume, Velocity, Variety',
      'Validity, Veracity, Value',
      'Volume, Veracity, Visualization',
      'Velocity, Virtualization, Variety'
    ],
    correctAnswer: 'Volume, Velocity, Variety'
  },
  {
    id: 257,
    chapter: 'Big Data & Data Science',
    question: 'Hadoop is an open-source framework for:',
    options: [
      'Relational database management',
      'Distributed storage and processing of large datasets',
      'Creating dashboards and reports',
      'Managing user security'
    ],
    correctAnswer: 'Distributed storage and processing of large datasets'
  },
  {
    id: 258,
    chapter: 'Big Data & Data Science',
    question: 'What is the core storage component of Hadoop?',
    options: ['MapReduce', 'YARN', 'HDFS (Hadoop Distributed File System)', 'Spark'],
    correctAnswer: 'HDFS (Hadoop Distributed File System)'
  },
  {
    id: 259,
    chapter: 'Big Data & Data Science',
    question: 'Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to:',
    options: [
      'Administer databases',
      'Extract knowledge and insights from structured and unstructured data',
      'Design network infrastructure',
      'Provide technical support'
    ],
    correctAnswer: 'Extract knowledge and insights from structured and unstructured data'
  },
  {
    id: 260,
    chapter: 'Big Data & Data Science',
    question: 'Which of the following is an example of unstructured data?',
    options: [
      'A relational database table',
      'A CSV file',
      'Text from social media posts',
      'A spreadsheet with financial data'
    ],
    correctAnswer: 'Text from social media posts'
  },
  {
    id: 261,
    chapter: 'Big Data & Data Science',
    question: 'Machine Learning is a subset of Artificial Intelligence that involves:',
    options: [
      'Explicitly programming computers to perform a task',
      'Giving computers the ability to learn without being explicitly programmed',
      'Designing computer hardware',
      'Managing data centers'
    ],
    correctAnswer: 'Giving computers the ability to learn without being explicitly programmed'
  },
  {
    id: 262,
    chapter: 'Big Data & Data Science',
    question: 'Apache Spark is often faster than Hadoop MapReduce because it:',
    options: [
      'Processes data on disk',
      'Processes data in-memory',
      'Uses less secure protocols',
      'Has a better graphical user interface'
    ],
    correctAnswer: 'Processes data in-memory'
  },
  {
    id: 263,
    chapter: 'Big Data & Data Science',
    question: 'Predictive analytics is used to:',
    options: [
      'Describe what has happened in the past',
      'Make predictions about unknown future events',
      'Prescribe a course of action',
      'Visualize historical data'
    ],
    correctAnswer: 'Make predictions about unknown future events'
  },
  {
    id: 264,
    chapter: 'Big Data & Data Science',
    question: 'The "Variety" characteristic of Big Data refers to:',
    options: [
      'The sheer amount of data',
      'The speed at which data is generated',
      'The different forms of data (structured, semi-structured, unstructured)',
      'The trustworthiness of the data'
    ],
    correctAnswer: 'The different forms of data (structured, semi-structured, unstructured)'
  },
  {
    id: 265,
    chapter: 'Big Data & Data Science',
    question: 'What is a data lake?',
    options: [
      'A highly structured analytical database',
      'A centralized repository that stores vast amounts of raw data in its native format',
      'A small, departmental database',
      'A tool for creating reports'
    ],
    correctAnswer: 'A centralized repository that stores vast amounts of raw data in its native format'
  },
  {
    id: 266,
    chapter: 'Big Data & Data Science',
    question: 'Supervised machine learning requires:',
    options: [
      'Unlabeled training data',
      'Labeled training data (data with known outcomes)',
      'No training data',
      'Data that is not stored electronically'
    ],
    correctAnswer: 'Labeled training data (data with known outcomes)'
  },
  {
    id: 267,
    chapter: 'Big Data & Data Science',
    question: 'Clustering is an example of what type of machine learning?',
    options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Semi-Supervised Learning'],
    correctAnswer: 'Unsupervised Learning'
  },
  {
    id: 268,
    chapter: 'Big Data & Data Science',
    question: 'Natural Language Processing (NLP) is a field of AI focused on:',
    options: [
      'Enabling computers to understand and process human language',
      'Optimizing database queries',
      'Managing computer networks',
      'Visualizing numerical data'
    ],
    correctAnswer: 'Enabling computers to understand and process human language'
  },
  {
    id: 269,
    chapter: 'Big Data & Data Science',
    question: 'The "Veracity" of Big Data refers to:',
    options: [
      'The size of the data',
      'The speed of the data',
      'The variety of the data',
      'The uncertainty and trustworthiness of the data'
    ],
    correctAnswer: 'The uncertainty and trustworthiness of the data'
  },
  {
    id: 270,
    chapter: 'Big Data & Data Science',
    question: 'Which programming language is most commonly associated with Data Science?',
    options: ['Java', 'C++', 'Python', 'HTML'],
    correctAnswer: 'Python'
  },
  {
    id: 271,
    chapter: 'Big Data & Data Science',
    question: 'The MapReduce programming model consists of which two main functions?',
    options: [
      'Read and Write',
      'Map and Reduce',
      'Start and Stop',
      'Input and Output'
    ],
    correctAnswer: 'Map and Reduce'
  },
  {
    id: 272,
    chapter: 'Big Data & Data Science',
    question: 'What is a primary challenge of a data lake?',
    options: [
      'It cannot store large volumes of data',
      'It can turn into a "data swamp" without proper governance and metadata management',
      'It only supports structured data',
      'It is too expensive for small companies'
    ],
    correctAnswer: 'It can turn into a "data swamp" without proper governance and metadata management'
  },
  {
    id: 273,
    chapter: 'Big Data & Data Science',
    question: 'A regression model is used for:',
    options: [
      'Predicting a continuous value (e.g., price, temperature)',
      'Classifying data into categories (e.g., spam or not spam)',
      'Grouping similar data points together',
      'Finding the shortest path in a network'
    ],
    correctAnswer: 'Predicting a continuous value (e.g., price, temperature)'
  },
  {
    id: 274,
    chapter: 'Big Data & Data Science',
    question: 'What is the role of a data scientist?',
    options: [
      'To design and build statistical models, perform analyses, and extract insights from data',
      'To install and maintain database software',
      'To manage the company website',
      'To provide IT support to employees'
    ],
    correctAnswer: 'To design and build statistical models, perform analyses, and extract insights from data'
  },
  {
    id: 275,
    chapter: 'Big Data & Data Science',
    question: 'A recommendation engine is a common application of:',
    options: ['Database administration', 'Network security', 'Machine learning', 'Data entry'],
    correctAnswer: 'Machine learning'
  },
  {
    id: 276,
    chapter: 'Big Data & Data Science',
    question: 'What does "ETL" stand for in the context of Big Data?',
    options: [
      'It is an outdated concept and not used',
      'Extract, Transform, Load - the principles are the same but the tools and scale are different',
      'Execute, Test, Learn',
      'Encode, Transmit, Log'
    ],
    correctAnswer: 'Extract, Transform, Load - the principles are the same but the tools and scale are different'
  },
  {
    id: 277,
    chapter: 'Big Data & Data Science',
    question: 'Which of the following is a common visualization tool used in data science?',
    options: ['Tableau', 'Matplotlib', 'Seaborn', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 278,
    chapter: 'Big Data & Data Science',
    question: '"Velocity" in Big Data refers to:',
    options: [
      'The speed at which data is generated, processed, and analyzed',
      'The amount of data',
      'The different types of data',
      'The accuracy of the data'
    ],
    correctAnswer: 'The speed at which data is generated, processed, and analyzed'
  },
  {
    id: 279,
    chapter: 'Big Data & Data Science',
    question: 'Deep Learning, which uses neural networks with many layers, is particularly effective for tasks like:',
    options: [
      'Simple data aggregation',
      'Image recognition and natural language processing',
      'Database indexing',
      'Managing user permissions'
    ],
    correctAnswer: 'Image recognition and natural language processing'
  },
  {
    id: 280,
    chapter: 'Big Data & Data Science',
    question: 'The process of cleaning, transforming, and preparing data for analysis is often called:',
    options: ['Data modeling', 'Data wrangling or data munging', 'Data visualization', 'Data archiving'],
    correctAnswer: 'Data wrangling or data munging'
  },

  // Document & Content Management (16 questions)
  {
    id: 281,
    chapter: 'Document & Content Management',
    question: 'Which type of content is the primary focus of Document and Content Management?',
    options: ['Structured data', 'Unstructured data (e.g., documents, images, videos)', 'Transactional data', 'Reference data'],
    correctAnswer: 'Unstructured data (e.g., documents, images, videos)'
  },
  {
    id: 282,
    chapter: 'Document & Content Management',
    question: 'A key function of a Document Management System (DMS) is:',
    options: ['Version control', 'Check-in/check-out', 'Search and retrieval', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 283,
    chapter: 'Document & Content Management',
    question: 'What is the purpose of Optical Character Recognition (OCR) in document management?',
    options: [
      'To compress image files',
      'To convert images of typed or handwritten text into machine-readable text',
      'To secure documents with a password',
      'To track document versions'
    ],
    correctAnswer: 'To convert images of typed or handwritten text into machine-readable text'
  },
  {
    id: 284,
    chapter: 'Document & Content Management',
    question: 'A content lifecycle typically includes which phases?',
    options: [
      'Create, Store, Use, Share, Archive, Destroy',
      'Buy, Sell, Trade',
      'Extract, Transform, Load',
      'Plan, Do, Check, Act'
    ],
    correctAnswer: 'Create, Store, Use, Share, Archive, Destroy'
  },
  {
    id: 285,
    chapter: 'Document & Content Management',
    question: 'Metadata is critical for document management because it:',
    options: [
      'Increases the file size of documents',
      'Facilitates searching, sorting, and managing documents',
      'Is required to open a document',
      'Automatically deletes old documents'
    ],
    correctAnswer: 'Facilitates searching, sorting, and managing documents'
  },
  {
    id: 286,
    chapter: 'Document & Content Management',
    question: 'A Records Management program is primarily concerned with:',
    options: [
      'Managing content for a public website',
      'The systematic control of records throughout their lifecycle, for legal and compliance purposes',
      'Collaborating on draft documents',
      'Storing personal photos'
    ],
    correctAnswer: 'The systematic control of records throughout their lifecycle, for legal and compliance purposes'
  },
  {
    id: 287,
    chapter: 'Document & Content Management',
    question: 'What is a key difference between a document and a record?',
    options: [
      'There is no difference',
      'A record is evidence of a business transaction and is subject to retention policies',
      'A document cannot be edited, but a record can',
      'A record is always a physical paper file'
    ],
    correctAnswer: 'A record is evidence of a business transaction and is subject to retention policies'
  },
  {
    id: 288,
    chapter: 'Document & Content Management',
    question: 'A taxonomy in content management is used to:',
    options: [
      'Define a hierarchical classification scheme for organizing content',
      'Encrypt content',
      'Track user access',
      'Convert files to PDF format'
    ],
    correctAnswer: 'Define a hierarchical classification scheme for organizing content'
  },
  {
    id: 289,
    chapter: 'Document & Content Management',
    question: 'A Digital Asset Management (DAM) system is specialized for managing:',
    options: [
      'Relational database tables',
      'Rich media assets like images, videos, and audio files',
      'Text-only documents',
      'Financial transactions'
    ],
    correctAnswer: 'Rich media assets like images, videos, and audio files'
  },
  {
    id: 290,
    chapter: 'Document & Content Management',
    question: 'The check-in/check-out feature in a DMS helps to:',
    options: [
      'Prevent multiple users from editing the same document simultaneously',
      'Delete the document permanently',
      'Make the document available to the public',
      'Archive the document'
    ],
    correctAnswer: 'Prevent multiple users from editing the same document simultaneously'
  },
  {
    id: 291,
    chapter: 'Document & Content Management',
    question: 'What is a major driver for implementing a content management system?',
    options: [
      'The need to improve collaboration and efficiency',
      'The need to ensure regulatory compliance',
      'The need to reduce the risk of information loss',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    id: 292,
    chapter: 'Document & Content Management',
    question: 'eDiscovery (Electronic Discovery) refers to:',
    options: [
      'The process of creating new electronic documents',
      'The process of identifying, preserving, and producing electronically stored information (ESI) for legal cases',
      'A new type of search engine',
      'A method for archiving emails'
    ],
    correctAnswer: 'The process of identifying, preserving, and producing electronically stored information (ESI) for legal cases'
  },
  {
    id: 293,
    chapter: 'Document & Content Management',
    question: 'A Web Content Management (WCM) system is used to:',
    options: [
      'Manage documents for internal use only',
      'Create, manage, and publish content for websites',
      'Administer database servers',
      'Manage network security'
    ],
    correctAnswer: 'Create, manage, and publish content for websites'
  },
  {
    id: 294,
    chapter: 'Document & Content Management',
    question: 'What is a document retention schedule?',
    options: [
      'A calendar for when to review documents',
      'A policy that defines how long different types of records must be kept',
      'A list of all documents in the system',
      'A backup plan for the document server'
    ],
    correctAnswer: 'A policy that defines how long different types of records must be kept'
  },
  {
    id: 295,
    chapter: 'Document & Content Management',
    question: 'The process of declaring a document as an official record is called:',
    options: ['Document Creation', 'Record Declaration', 'Document Deletion', 'Version Control'],
    correctAnswer: 'Record Declaration'
  },
  {
    id: 296,
    chapter: 'Document & Content Management',
    question: 'Full-text search allows users to find documents based on:',
    options: [
      'Only the metadata tags',
      'The content within the documents themselves',
      'The document author only',
      'The date the document was created only'
    ],
    correctAnswer: 'The content within the documents themselves'
  },
  
  // Data Ethics (25 questions)
  {
    id: 297,
    chapter: 'Data Ethics',
    question: 'Data ethics is primarily concerned with:',
    options: [
      'The technical implementation of databases',
      'The moral problems and principles related to collecting, using, and sharing data',
      'The speed of data processing',
      'The cost of data storage'
    ],
    correctAnswer: 'The moral problems and principles related to collecting, using, and sharing data'
  },
  {
    id: 298,
    chapter: 'Data Ethics',
    question: 'Algorithmic bias refers to:',
    options: [
      'A technical glitch in an algorithm',
      'Systematic and repeatable errors in a computer system that create unfair outcomes, such as privileging one group over another',
      'An algorithm that runs very slowly',
      'The process of debugging code'
    ],
    correctAnswer: 'Systematic and repeatable errors in a computer system that create unfair outcomes, such as privileging one group over another'
  },
  {
    id: 299,
    chapter: 'Data Ethics',
    question: 'The principle of "transparency" in data ethics means that:',
    options: [
      'All data should be made public',
      'Individuals should be able to understand how their data is being used and how automated decisions are made',
      'Data should be stored in a clear, unencrypted format',
      'Only data scientists can understand the process'
    ],
    correctAnswer: 'Individuals should be able to understand how their data is being used and how automated decisions are made'
  },
  {
    id: 300,
    chapter: 'Data Ethics',
    question: 'Which of the following is a potential source of bias in a machine learning model?',
    options: [
      'Biased training data',
      'The features selected for the model',
      'The way the model is designed',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    id: 301,
    chapter: 'Data Ethics',
    question: 'The concept of "privacy by design" means that:',
    options: [
      'Privacy considerations should be an afterthought',
      'Privacy should be proactively embedded into the design and architecture of systems and business practices',
      'Privacy is the sole responsibility of the legal department',
      'Privacy cannot be achieved in modern systems'
    ],
    correctAnswer: 'Privacy should be proactively embedded into the design and architecture of systems and business practices'
  },
  {
    id: 302,
    chapter: 'Data Ethics',
    question: 'What is a key ethical concern regarding the use of facial recognition technology?',
    options: [
      'Potential for mass surveillance and misidentification',
      'The high cost of the technology',
      'The large amount of storage it requires',
      'The slow processing speed'
    ],
    correctAnswer: 'Potential for mass surveillance and misidentification'
  },
  {
    id: 303,
    chapter: 'Data Ethics',
    question: 'Data anonymization is the process of:',
    options: [
      'Deleting all personal data',
      'Encrypting personal data',
      'Removing or modifying personally identifiable information to protect privacy',
      'Making a backup of personal data'
    ],
    correctAnswer: 'Removing or modifying personally identifiable information to protect privacy'
  },
  {
    id: 304,
    chapter: 'Data Ethics',
    question: 'A "filter bubble" or "echo chamber" is an ethical concern because it can:',
    options: [
      'Improve user experience by showing relevant content',
      'Limit an individual\'s exposure to diverse viewpoints and reinforce existing beliefs',
      'Increase the speed of a website',
      'Help users find new friends'
    ],
    correctAnswer: 'Limit an individual\'s exposure to diverse viewpoints and reinforce existing beliefs'
  },
  {
    id: 305,
    chapter: 'Data Ethics',
    question: 'What does "accountability" mean in the context of data ethics?',
    options: [
      'Organizations are responsible for their data practices and for any harm they may cause',
      'The ability to count all records in a database',
      'The process of auditing financial accounts',
      'A user\'s login credentials'
    ],
    correctAnswer: 'Organizations are responsible for their data practices and for any harm they may cause'
  },
  {
    id: 306,
    chapter: 'Data Ethics',
    question: 'Informed consent means that:',
    options: [
      'A user agrees to terms and conditions without reading them',
      'A user is given clear, understandable information about how their data will be used before they agree to it',
      'A company informs users after their data has been used',
      'Consent is implied by using a service'
    ],
    correctAnswer: 'A user is given clear, understandable information about how their data will be used before they agree to it'
  },
  {
    id: 307,
    chapter: 'Data Ethics',
    question: 'Which of the following describes a "disparate impact"?',
    options: [
      'A practice or algorithm that seems neutral but has a discriminatory effect on a protected group',
      'A system that treats all groups identically',
      'A positive impact on all users',
      'A minor bug in a software program'
    ],
    correctAnswer: 'A practice or algorithm that seems neutral but has a discriminatory effect on a protected group'
  },
  {
    id: 308,
    chapter: 'Data Ethics',
    question: 'An ethical framework for data science should promote:',
    options: ['Fairness', 'Accountability', 'Transparency', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 309,
    chapter: 'Data Ethics',
    question: 'The "right to be forgotten" (or right to erasure) is a key principle of which regulation?',
    options: ['SOX', 'HIPAA', 'GDPR', 'PCI DSS'],
    correctAnswer: 'GDPR'
  },
  {
    id: 310,
    chapter: 'Data Ethics',
    question: 'Why is it difficult to completely de-anonymize data?',
    options: [
      'It is not difficult',
      'Because linking the anonymized dataset with other publicly available data can sometimes re-identify individuals',
      'Because encryption makes it impossible',
      'Because the data is deleted after anonymization'
    ],
    correctAnswer: 'Because linking the anonymized dataset with other publicly available data can sometimes re-identify individuals'
  },
  {
    id: 311,
    chapter: 'Data Ethics',
    question: 'A key ethical principle is "purpose limitation," which means:',
    options: [
      'Data can be used for any purpose the organization chooses',
      'Data should be collected for a specific, explicit, and legitimate purpose and not be processed further in a way that is incompatible with that purpose',
      'There is a limit to how much data can be collected',
      'The purpose of data collection does not need to be defined'
    ],
    correctAnswer: 'Data should be collected for a specific, explicit, and legitimate purpose and not be processed further in a way that is incompatible with that purpose'
  },
  {
    id: 312,
    chapter: 'Data Ethics',
    question: 'An AI model that is a "black box" raises ethical concerns related to:',
    options: ['Storage cost', 'Processing speed', 'Transparency and explainability', 'Network bandwidth'],
    correctAnswer: 'Transparency and explainability'
  },
  {
    id: 313,
    chapter: 'Data Ethics',
    question: 'Data minimization is the principle that:',
    options: [
      'As much data as possible should be collected',
      'Only the data that is necessary for a specific purpose should be collected and retained',
      'Data should be stored in the smallest possible file format',
      'The use of data should be minimized'
    ],
    correctAnswer: 'Only the data that is necessary for a specific purpose should be collected and retained'
  },
  {
    id: 314,
    chapter: 'Data Ethics',
    question: 'What is a potential ethical issue with using AI in hiring processes?',
    options: [
      'It can be more efficient than manual screening',
      'The AI could learn and perpetuate existing biases from historical hiring data',
      'It can process a large number of applications quickly',
      'There are no ethical issues'
    ],
    correctAnswer: 'The AI could learn and perpetuate existing biases from historical hiring data'
  },
  {
    id: 315,
    chapter: 'Data Ethics',
    question: 'An ethical data professional should prioritize:',
    options: [
      'The interests of their employer above all else',
      'A balance between innovation, business objectives, and the potential impact on individuals and society',
      'Building the most complex model possible, regardless of its impact',
      'Completing projects as quickly as possible, ignoring potential ethical issues'
    ],
    correctAnswer: 'A balance between innovation, business objectives, and the potential impact on individuals and society'
  },
  {
    id: 316,
    chapter: 'Data Ethics',
    question: 'The use of predictive policing algorithms has been criticized for:',
    options: [
      'Being too accurate',
      'Potentially reinforcing and amplifying existing biases in law enforcement',
      'Being too expensive to implement',
      'Requiring too much data'
    ],
    correctAnswer: 'Potentially reinforcing and amplifying existing biases in law enforcement'
  },
  {
    id: 317,
    chapter: 'Data Ethics',
    question: 'What is the role of an ethics committee or review board for data projects?',
    options: [
      'To slow down projects unnecessarily',
      'To provide oversight and guidance on the ethical implications of data-driven projects',
      'To handle the technical implementation of projects',
      'To manage the project budget'
    ],
    correctAnswer: 'To provide oversight and guidance on the ethical implications of data-driven projects'
  },
  {
    id: 318,
    chapter: 'Data Ethics',
    question: 'The concept of "fairness" in machine learning is:',
    options: [
      'A simple, universally agreed-upon mathematical formula',
      'A complex, multifaceted concept with various definitions (e.g., group fairness, individual fairness)',
      'Not relevant to model development',
      'Only about ensuring the training data is large enough'
    ],
    correctAnswer: 'A complex, multifaceted concept with various definitions (e.g., group fairness, individual fairness)'
  },
  {
    id: 319,
    chapter: 'Data Ethics',
    question: 'A "human-in-the-loop" system is an ethical design pattern that:',
    options: [
      'Allows an AI to operate with complete autonomy',
      'Ensures human oversight and the ability to intervene or override AI-driven decisions',
      'Is less efficient than a fully automated system',
      'Replaces human decision-makers entirely'
    ],
    correctAnswer: 'Ensures human oversight and the ability to intervene or override AI-driven decisions'
  },
  {
    id: 320,
    chapter: 'Data Ethics',
    question: 'Differential privacy is a technique used to:',
    options: [
      'Publicly share raw, individual-level data',
      'Share aggregate data and statistics while minimizing the risk of identifying any single individual',
      'Ensure perfect accuracy in all published statistics',
      'Encrypt entire databases'
    ],
    correctAnswer: 'Share aggregate data and statistics while minimizing the risk of identifying any single individual'
  },
  {
    id: 321,
    chapter: 'Data Management',
    question: 'Data is an organizational asset. What international standard is concerned with asset management?',
    options: [
      'ISO 27001',
      'ISO 8000',
      'ISO 55000/55001',
      'ISO 25000',
      'ANSI 859',
    ],
    correctAnswer: 'ISO 55000/55001',
  }
];
