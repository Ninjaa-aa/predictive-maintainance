import { industryBenefits } from '@/data/sucessstories';
import { FuturisticBackground, GridAnimation } from '@/components/sucessstories/client/Animations';
import AnimatedCard from '@/components/sucessstories/client/AnimatedCard';
import AnimatedListItem from '@/components/sucessstories/client/AnimatedListItems';

const IndustryBenefits = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-red-50 via-white to-red-50 overflow-hidden">
      <FuturisticBackground />
      <GridAnimation />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-red-200 
            rounded-full bg-red-50/50 hover:bg-red-50 transition-all duration-300">
            <span className="text-sm font-medium bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              Industry Success Stories
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Transforming Industries Through Predictive Maintenance
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Discover how leading organizations across different sectors achieve operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryBenefits.map((benefit, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 text-sm font-medium text-red-600 bg-red-50 rounded-full
                    group-hover:bg-red-100/50 transition-colors duration-300">
                    {benefit.industry}
                  </span>
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </span>
                </div>

                <div className="mb-6 transform group-hover:translate-x-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {benefit.company}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-red-500 to-rose-500 
                      bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-rose-600 
                      transition-all duration-300">
                      {benefit.metrics.primary}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      {benefit.metrics.context}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {benefit.implementation.map((item, idx) => (
                    <AnimatedListItem key={idx}>
                      {item}
                    </AnimatedListItem>
                  ))}
                </ul>

                <div className="pt-4 border-t border-red-100 group-hover:border-red-200 transition-colors duration-300">
                  <p className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {benefit.impact}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefits;