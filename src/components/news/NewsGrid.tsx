"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Tooltip from "@/components/ui/Tooltip";

interface NewsItem {
  title: string;
  description: string;
  date: string;
  category: string;
  source: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Build-to-Rent Communities See Record Growth in 2024",
    description: "Investment in single-family build-to-rent communities continues to surge as demand for rental homes remains strong across major US markets.",
    date: "February 20, 2024",
    category: "Build-to-Rent",
    source: "Real Estate Weekly"
  },
  {
    title: "Office-to-Residential Conversions Gain Momentum",
    description: "Major cities are seeing increased interest in converting underutilized office spaces into residential units as work patterns evolve.",
    date: "February 19, 2024",
    category: "Commercial",
    source: "Commercial Property Executive"
  },
  {
    title: "Sunbelt Markets Lead BTR Development Pipeline",
    description: "Phoenix, Dallas, and Atlanta continue to dominate the build-to-rent development landscape with multiple projects under construction.",
    date: "February 18, 2024",
    category: "Build-to-Rent",
    source: "Multi-Housing News"
  },
  {
    title: "ESG Initiatives Drive Commercial Real Estate Innovation",
    description: "Sustainability and energy efficiency become key factors in commercial real estate development and investment decisions.",
    date: "February 17, 2024",
    category: "Commercial",
    source: "GlobeSt"
  },
  {
    title: "Institutional Investors Expand BTR Portfolios",
    description: "Large investment firms are increasing their allocation to build-to-rent properties, citing strong returns and growing demand.",
    date: "February 16, 2024",
    category: "Build-to-Rent",
    source: "National Real Estate Investor"
  },
  {
    title: "Tech Corridors See Rising Commercial Demand",
    description: "Secondary markets with growing tech presence experience increased demand for office and mixed-use developments.",
    date: "February 15, 2024",
    category: "Commercial",
    source: "CoStar News"
  }
];

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function NewsGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {newsItems.map((newsItem, index) => (
            <motion.div key={index} variants={itemAnimation}>
              <div className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 rounded-lg cursor-pointer">
                <Tooltip 
                  content={`Published by ${newsItem.source} on ${newsItem.date}`}
                >
                  <div className="p-6 flex flex-col space-y-4">
                    <div className="space-y-2">
                      <Badge 
                        variant={newsItem.category === "Build-to-Rent" ? "primary" : "secondary"}
                        size="md"
                      >
                        {newsItem.category}
                      </Badge>
                      <h3 className="text-xl font-bold leading-tight hover:text-primary transition-colors duration-200">
                        {newsItem.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                        {newsItem.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100 dark:border-gray-800">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {newsItem.source}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {newsItem.date}
                      </span>
                    </div>
                  </div>
                </Tooltip>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}