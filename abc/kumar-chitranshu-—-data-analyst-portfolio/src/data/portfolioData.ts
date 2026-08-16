import { StatItem, SkillCategory, ExperienceItem, ProjectItem, CredentialItem, EducationItem } from '../types';

export const personalInfo = {
  name: 'KUMAR CHITRANSHU',
  shortName: 'KC',
  title: 'Data Analyst — Python · SQL · Power BI · PostgreSQL',
  tagline: 'Turning raw data into clean, actionable business insight.',
  about:
    'With a passion for uncovering the story hidden within data, I specialize in end-to-end analytics — from data cleaning and transformation to building predictive models and interactive visualizations. My goal is to bridge the gap between raw data and strategic business decisions.',
  email: 'kumarchitranshu.dev@gmail.com',
  github: 'https://github.com/kumarchitranshu',
  linkedin: 'https://linkedin.com/in/kumarchitranshu',
  location: 'India',
  phone: '+91 98765 43210',
};

export const stats: StatItem[] = [
  { value: '3', label: 'PROJECTS' },
  { value: '4', label: 'CERTS' },
  { value: '120h', label: 'ML' },
  { value: '5', label: 'TOOLS' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'R', 'JavaScript'],
  },
  {
    title: 'Analytics',
    skills: ['Data Wrangling', 'Statistical', 'A/B Testing', 'Forecasting'],
  },
  {
    title: 'BI & Viz',
    skills: ['Power BI', 'Tableau', 'Looker', 'Data Studio'],
  },
  {
    title: 'Libraries',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Tools',
    skills: ['Jupyter', 'Git', 'Docker', 'Excel', 'Streamlit'],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    company: 'Prernagati Tech',
    role: 'Machine Learning Intern',
    period: 'Jan 2024 – Present',
    bullets: [
      'Led data preprocessing for large-scale datasets, achieving 95% data accuracy.',
      'Developed and optimized machine learning pipelines for predictive modeling, improving forecast precision by 12%.',
      'Collaborated with cross-functional teams to deploy models into production environments.',
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'sales-performance-dashboard',
    title: 'Sales Performance Dashboard',
    tags: ['Python', 'SQL', 'Power BI'],
    description:
      'Interactive dashboard visualizing sales KPIs and trends, reducing reporting time by 40%.',
    githubUrl: 'https://github.com/kumarchitranshu/sales-performance-dashboard',
    type: 'dashboard',
    fullOverview:
      'Built an end-to-end automated business intelligence reporting pipeline and real-time dashboard suite in Power BI and SQL. Enabled executives and regional sales managers to drill down across product categories, geographic territories, and quarterly cohort retention.',
    keyMetrics: [
      { label: 'Reporting Time Saved', value: '40%' },
      { label: 'Revenue Analyzed', value: '$4.2M' },
      { label: 'Query Latency', value: '<120ms' },
      { label: 'Data Points Cleaned', value: '1.2M+' },
    ],
    techStack: ['Python', 'SQL', 'Power BI', 'DAX', 'PostgreSQL', 'Excel'],
    codeSnippet: `-- Executive Sales Trend Query with Window Functions
SELECT 
    DATE_TRUNC('month', order_date) AS sales_month,
    product_category,
    SUM(total_amount) AS total_revenue,
    COUNT(DISTINCT customer_id) AS active_buyers,
    LAG(SUM(total_amount), 1) OVER (
        PARTITION BY product_category 
        ORDER BY DATE_TRUNC('month', order_date)
    ) AS prev_month_revenue,
    ROUND(
        (SUM(total_amount) - LAG(SUM(total_amount), 1) OVER (
            PARTITION BY product_category 
            ORDER BY DATE_TRUNC('month', order_date)
        )) / NULLIF(LAG(SUM(total_amount), 1) OVER (
            PARTITION BY product_category 
            ORDER BY DATE_TRUNC('month', order_date)
        ), 0) * 100, 2
    ) AS mom_growth_pct
FROM sales_transactions
WHERE status = 'COMPLETED'
GROUP BY 1, 2
ORDER BY 1 DESC, total_revenue DESC;`,
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction Model',
    tags: ['Python', 'Scikit-learn', 'PostgreSQL'],
    description:
      'Developed an ML model with 86% accuracy to identify at-risk customers and recommend retention strategies.',
    githubUrl: 'https://github.com/kumarchitranshu/customer-churn-prediction',
    type: 'pipeline',
    fullOverview:
      'Engineered a comprehensive predictive machine learning classification architecture using Scikit-Learn and XGBoost on 50,000+ subscriber records. Applied SHAP values to explain feature importance, pinpointing contract length and support ticket frequency as prime churn drivers.',
    keyMetrics: [
      { label: 'Model ROC-AUC', value: '0.91' },
      { label: 'Classification Accuracy', value: '86%' },
      { label: 'Precision on Churn', value: '84%' },
      { label: 'At-Risk Revenue Saved', value: '$180K' },
    ],
    techStack: ['Python', 'Scikit-learn', 'PostgreSQL', 'XGBoost', 'SHAP', 'Pandas'],
    codeSnippet: `# Production Churn Pipeline with Hyperparameter Tuning
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, roc_auc_score

# Define Feature Preprocessing Pipeline
num_features = ['tenure_months', 'monthly_charges', 'support_tickets']
cat_features = ['contract_type', 'payment_method', 'internet_service']

preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), num_features),
        ('cat', OneHotEncoder(drop='first', sparse_output=False), cat_features)
    ]
)

churn_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier(n_estimators=200, max_depth=8, random_state=42))
])

# Fit & Evaluate
churn_pipeline.fit(X_train, y_train)
preds = churn_pipeline.predict(X_test)
probs = churn_pipeline.predict_proba(X_test)[:, 1]
print("AUC-ROC Score:", roc_auc_score(y_test, probs))`,
  },
  {
    id: 'ecommerce-market-basket-analysis',
    title: 'E-commerce Market Basket Analysis',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    description:
      'Implemented Apriori algorithm to uncover purchasing patterns, driving a 15% increase in cross-selling revenue.',
    githubUrl: 'https://github.com/kumarchitranshu/ecommerce-market-basket-analysis',
    type: 'basket',
    fullOverview:
      'Analyzed point-of-sale e-commerce transactional baskets containing over 250,000 customer orders. Derived strong association rules utilizing Apriori and FP-Growth, helping marketing optimize cross-sell bundles, on-site product recommendations, and promotional discounts.',
    keyMetrics: [
      { label: 'Cross-Sell Lift', value: '+15%' },
      { label: 'Analyzed Transactions', value: '250K+' },
      { label: 'Association Rules', value: '142' },
      { label: 'Avg Confidence', value: '78%' },
    ],
    techStack: ['Python', 'Pandas', 'Mlxtend', 'Matplotlib', 'Seaborn', 'NumPy'],
    codeSnippet: `# Association Rule Mining via FP-Growth & Apriori
from mlxtend.frequent_patterns import apriori, association_rules
import pandas as pd

# Convert transaction list into one-hot basket matrix
basket_one_hot = transaction_df.groupby(['order_id', 'item_name'])['qty'] \\
    .sum().unstack().reset_index().fillna(0).set_index('order_id')
basket_binary = basket_one_hot.map(lambda x: 1 if x > 0 else 0)

# Generate frequent itemsets with min_support=0.02
frequent_itemsets = apriori(basket_binary, min_support=0.02, use_colnames=True)

# Derive association rules filtered by lift > 1.5 and confidence > 0.6
rules = association_rules(frequent_itemsets, metric="lift", min_threshold=1.5)
rules = rules.sort_values(by=['confidence', 'lift'], ascending=[False, False])
print(rules[['antecedents', 'consequents', 'support', 'confidence', 'lift']].head(10))`,
  },
];

export const certificationsData: CredentialItem[] = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuerOrField: 'Coursera / Google',
    year: '2023',
  },
  {
    title: 'University of Michigan — Applied Data Science with Python Specialization',
    issuerOrField: 'Coursera / University of Michigan',
    year: '2023',
  },
  {
    title: 'NPTEL — Machine Learning',
    issuerOrField: 'NPTEL / IIT Madras',
    year: '2023',
  },
];

export const educationData: EducationItem[] = [
  {
    institution: 'Chandigarh University',
    degree: 'Bachelor of Engineering in Computer Science (Data Science)',
    location: 'Punjab, India',
  },
  {
    institution: 'Jeewan Public School',
    degree: 'Senior Secondary (PCM)',
    location: 'CBSE Board',
  },
];
