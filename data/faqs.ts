import faqsJson from './faqs.json';
import { FaqItem } from '@/lib/types';
import {
  allFaqs,
  getAllFaqs,
  getFaqsByCategory,
  getFaqsForService,
  getFeaturedFaqs,
  getFaqCategories,
  searchFaqs,
} from '@/lib/faqs';

export const faqsData: FaqItem[] = faqsJson as FaqItem[];

export {
  allFaqs,
  getAllFaqs,
  getFaqsByCategory,
  getFaqsForService,
  getFeaturedFaqs,
  getFaqCategories,
  searchFaqs,
};

export default faqsData;
