export interface SubService {
    name: string;
    description: string;
  }
  
  export interface Service {
    id: string;
    name: string;
    description: string;
    icon: string;
    subServices?: SubService[];
  }
  
  export const services: Service[] = [
    {
      id: "data-engineering",
      name: "Data Engineering",
      description: "We optimize the process of extracting, transforming, and loading (ETL) your data from various sources, ensuring data quality and reliability for your analytics projects.",
      icon: "mdi:database-cog-outline"
    },
    {
      id: "data-science",
      name: "Data Science and Modeling",
      description: "Uncover hidden patterns, trends, and insights within your data employing our advanced statistical techniques and machine learning algorithms.",
      icon: "mdi:flask-outline"
    },
    {
      id: "business-intelligence",
      name: "Business Intelligence (BI)",
      description: "Acquire comprehensive BI solutions that help you turn data into actionable intelligence, enabling you to make informed decisions and drive business growth.",
      icon: "mdi:chart-box-outline"
    },
    {
      id: "predictive-analytics",
      name: "Predictive Analytics",
      description: "Leverage advanced analytics to forecast trends and make proactive decisions.",
      icon: "mdi:crystal-ball",
      subServices: [
        {
          name: "Predictive Maintenance",
          description: "By leveraging machine learning and sensor data, we can predict equipment failures before they occur, enabling proactive maintenance and minimizing downtime."
        },
        {
          name: "Sales Forecasting",
          description: "Our data-driven approach helps you accurately forecast sales trends, optimize inventory management, and make informed business decisions."
        }
      ]
    },
    {
      id: "ai-solutions",
      name: "AI-Powered Solutions",
      description: "Harness the power of artificial intelligence to transform your business processes.",
      icon: "mdi:robot-outline",
      subServices: [
        {
          name: "Intelligent Automation",
          description: "We specialize in automating repetitive tasks using advanced technologies like Robotic Process Automation (RPA) and Natural Language Processing (NLP), combined with AI-powered capabilities for more complex decision-making and learning. Our solutions can significantly improve efficiency and reduce operational costs."
        },
        {
          name: "AI Copilot and Chat Tool Integration",
          description: "Our AI-powered virtual assistants and chatbots can provide real-time support, enhance customer experiences, and streamline internal processes."
        }
      ]
    },
    {
      id: "visualization",
      name: "Visualization",
      description: "Transform complex data into clear, actionable insights.",
      icon: "mdi:chart-areaspline",
      subServices: [
        {
          name: "Dashboards and Data Visualization",
          description: "We create interactive dashboards and visualizations that turn complex data into actionable insights, empowering you to make data-driven decisions."
        },
        {
          name: "Interactive Data Exploration",
          description: "Our tools allow users to dynamically explore and interact with data, uncovering insights through intuitive interfaces and real-time visual feedback."
        }
      ]
    }
  ];