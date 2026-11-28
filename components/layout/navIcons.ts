import React from 'react';
import {
  getAboutRealIcon,
  getIndustryRealIcon,
  getResourceRealIcon,
  getServiceLogo,
} from '@/components/shared/BrandLogos';
import { NavItem } from '@/lib/types';

export type NavSectionGroup = 'services' | 'industries' | 'about' | 'resources';

const containerColorByIcon: Record<string, string> = {
  // Services (harmonious brand tints matching SkillsSection & ServicesMatrix)
  BarChart3: 'bg-[#FEFCE8] border-[#FEF08A] group-hover:bg-white group-hover:border-[#FDE047]',
  Database: 'bg-[#FEF2F2] border-[#FECACA] group-hover:bg-white group-hover:border-[#FCA5A5]',
  FileSpreadsheet: 'bg-[#ECFDF3] border-[#A6F4C5] group-hover:bg-white group-hover:border-[#6CE9A6]',
  FileText: 'bg-[#FFF7ED] border-[#FED7AA] group-hover:bg-white group-hover:border-[#FDBA74]',
  Bot: 'bg-[#EFF8FF] border-[#B2DDFF] group-hover:bg-white group-hover:border-[#7DD3FC]',
  LineChart: 'bg-[#F0F9FF] border-[#BAE6FD] group-hover:bg-white group-hover:border-[#38BDF8]',

  // Industries
  Factory: 'bg-orange-50 border-orange-200 group-hover:bg-white group-hover:border-orange-300',
  Landmark: 'bg-emerald-50 border-emerald-200 group-hover:bg-white group-hover:border-emerald-300',
  HeartPulse: 'bg-rose-50 border-rose-200 group-hover:bg-white group-hover:border-rose-300',
  Activity: 'bg-rose-50 border-rose-200 group-hover:bg-white group-hover:border-rose-300',
  Truck: 'bg-sky-50 border-sky-200 group-hover:bg-white group-hover:border-sky-300',
  ShoppingBag: 'bg-violet-50 border-violet-200 group-hover:bg-white group-hover:border-violet-300',

  // About
  Building2: 'bg-sky-50 border-sky-200 group-hover:bg-white group-hover:border-sky-300',
  Compass: 'bg-indigo-50 border-indigo-200 group-hover:bg-white group-hover:border-indigo-300',
  ShieldCheck: 'bg-emerald-50 border-emerald-200 group-hover:bg-white group-hover:border-emerald-300',

  // Resources
  Award: 'bg-amber-50 border-amber-200 group-hover:bg-white group-hover:border-amber-300',
  BookOpen: 'bg-cyan-50 border-cyan-200 group-hover:bg-white group-hover:border-cyan-300',
  HelpCircle: 'bg-violet-50 border-violet-200 group-hover:bg-white group-hover:border-violet-300',
};

const defaultContainerClass =
  'bg-[#F0F9FF] border-[#BAE6FD] group-hover:bg-white group-hover:border-[#38BDF8]';

const resolverByGroup: Record<
  NavSectionGroup,
  (key: string, iconClass: string) => React.ReactNode
> = {
  services: getServiceLogo,
  industries: getIndustryRealIcon,
  about: getAboutRealIcon,
  resources: getResourceRealIcon,
};

/**
 * Returns the real multi-tone SVG logo/icon and matching soft-tint container classes
 * for any dropdown navigation item, matching the home page iconography.
 */
export function getNavRealIcon(
  group: NavSectionGroup,
  item: Pick<NavItem, 'href' | 'iconName'>,
  iconClass = 'w-5 h-5'
): { icon: React.ReactNode; containerClass: string } {
  const lookupKey = `${item.iconName ?? ''} ${item.href}`;
  const icon = resolverByGroup[group](lookupKey, iconClass);
  const containerClass =
    (item.iconName && containerColorByIcon[item.iconName]) || defaultContainerClass;

  return { icon, containerClass };
}
