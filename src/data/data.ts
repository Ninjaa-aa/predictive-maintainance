export interface MenuItem {
    label: string;
    href: string;
    subItems?: MenuItem[];
  }
  
  export const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '#services',
      subItems: [
        { label: 'Data Engineering', href: '#data-engineering' },
        { label: 'Data Science and Modeling', href: '#data-science' },
        { label: 'Business Intelligence', href: '#bi' },
        { label: 'Predictive Analytics', href: '#predictive-analytics' },
        { label: 'AI-Powered Solutions', href: '#ai-solutions' },
        { label: 'Visualization', href: '#visualization' }
      ]
    },
    {
      label: 'Industries',
      href: '#industries',
      subItems: [
        { label: 'Healthcare', href: '#healthcare' },
        { label: 'Manufacturing', href: '#manufacturing' },
        { label: 'Financial Services', href: '#financial-services' },
        { label: 'Retail', href: '#retail' },
        { label: 'E-commerce', href: '#e-commerce' }
      ]
    },
    { label: 'Contact', href: '#contact' }
  ];