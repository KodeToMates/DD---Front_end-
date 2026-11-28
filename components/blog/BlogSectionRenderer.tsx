'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Info,
  Lightbulb,
  Quote,
  TrendingUp,
} from 'lucide-react';
import type { BlogGraphSection, BlogLink, BlogSection } from '@/lib/types';
import { slugifyHeading } from '@/lib/blogs';

interface BlogSectionRendererProps {
  section: BlogSection;
  links?: BlogLink[];
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Replaces configured internal and external target phrases in prose cleanly
 * without breaking adjacent punctuation or matching substrings inside words.
 */
function renderTextWithLinks(text: string, links: BlogLink[] = []): React.ReactNode {
  if (!links || links.length === 0) return text;

  type Match = {
    start: number;
    end: number;
    link: BlogLink;
  };

  // Match longer phrases first so specific phrases win over shorter tokens
  const sortedLinks = [...links].sort((a, b) => b.word.length - a.word.length);
  const candidateMatches: Match[] = [];

  for (const link of sortedLinks) {
    if (!link.word) continue;
    const regex = new RegExp(`(?<![A-Za-z0-9])${escapeRegExp(link.word)}(?![A-Za-z0-9])`);
    const match = regex.exec(text);
    if (match && match.index !== undefined) {
      candidateMatches.push({
        start: match.index,
        end: match.index + match[0].length,
        link,
      });
    }
  }

  if (candidateMatches.length === 0) return text;

  candidateMatches.sort((a, b) => a.start - b.start || b.end - a.end);
  const nonOverlapping: Match[] = [];
  let lastEnd = 0;

  for (const m of candidateMatches) {
    if (m.start >= lastEnd) {
      nonOverlapping.push(m);
      lastEnd = m.end;
    }
  }

  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  nonOverlapping.forEach((m, idx) => {
    if (m.start > cursor) {
      nodes.push(text.slice(cursor, m.start));
    }

    const matchedText = text.slice(m.start, m.end);
    if (m.link.isExternal) {
      nodes.push(
        <a
          key={`ext-${idx}-${m.start}`}
          href={m.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-baseline gap-0.5 font-semibold text-[#0284C7] underline decoration-[#0284C7]/40 underline-offset-4 hover:text-[#0369A1] hover:decoration-[#0369A1] transition-colors"
        >
          <span>{matchedText}</span>
          <ArrowUpRight className="inline w-3.5 h-3.5 shrink-0 translate-y-[1px]" />
        </a>
      );
    } else {
      nodes.push(
        <Link
          key={`int-${idx}-${m.start}`}
          href={m.link.url}
          className="font-semibold text-[#0284C7] underline decoration-[#0284C7]/40 underline-offset-4 hover:text-[#0369A1] hover:decoration-[#0369A1] transition-colors"
        >
          {matchedText}
        </Link>
      );
    }

    cursor = m.end;
  });

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

function BlogGraphWidget({ section }: { section: BlogGraphSection }) {
  const unit = section.unit || (section.chartType === 'metric' ? '%' : '');
  const allValues = section.items.flatMap((it) =>
    typeof it.secondaryValue === 'number' ? [it.value, it.secondaryValue] : [it.value]
  );
  const rawMax = Math.max(...allValues, 1);
  const scaleMax = section.chartType === 'metric' && rawMax <= 100 ? 100 : rawMax * 1.12;

  if (section.chartType === 'line') {
    const svgWidth = 640;
    const svgHeight = 230;
    const padX = 48;
    const padTop = 28;
    const padBottom = 38;
    const plotW = svgWidth - padX * 2;
    const plotH = svgHeight - padTop - padBottom;
    const count = Math.max(section.items.length, 2);

    const points = section.items.map((item, idx) => {
      const x =
        section.items.length === 1
          ? padX + plotW / 2
          : padX + (idx / (count - 1)) * plotW;
      const ratio = item.value / scaleMax;
      const y = padTop + plotH - ratio * plotH;
      return { x, y, item };
    });

    const lineCoords = points.map((p) => `${p.x},${p.y}`).join(' ');
    const areaCoords = `${points[0].x},${padTop + plotH} ${lineCoords} ${points[points.length - 1].x},${padTop + plotH}`;

    return (
      <div className="my-8 rounded-2xl border border-[#BAE6FD] bg-white p-6 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div className="flex items-start gap-3">
            <span className="p-2 rounded-xl bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] shrink-0">
              <TrendingUp className="w-4 h-4" />
            </span>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#101828] tracking-[-0.02em]">
                {section.title}
              </h4>
              {section.subtitle && (
                <p className="text-xs text-[#667085] font-body mt-0.5">{section.subtitle}</p>
              )}
            </div>
          </div>
          {unit && (
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD]">
              Unit: {unit}
            </span>
          )}
        </div>

        <div className="w-full overflow-x-auto">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full min-w-[460px] h-auto"
            role="img"
            aria-label={section.title}
          >
            <defs>
              <linearGradient id="blogLineFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Horizontal grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((step) => {
              const yPos = padTop + plotH - step * plotH;
              const labelVal = Math.round(scaleMax * step);
              return (
                <g key={step}>
                  <line
                    x1={padX}
                    y1={yPos}
                    x2={svgWidth - padX}
                    y2={yPos}
                    stroke="#EAECF0"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={padX - 8}
                    y={yPos + 4}
                    textAnchor="end"
                    className="fill-[#667085] text-[10px] font-mono"
                  >
                    {labelVal}
                  </text>
                </g>
              );
            })}

            {/* Shaded area & line */}
            <polygon points={areaCoords} fill="url(#blogLineFill)" />
            <polyline
              fill="none"
              stroke="#0284C7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={lineCoords}
            />

            {/* Data nodes & labels */}
            {points.map((pt, idx) => (
              <g key={idx}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="5.5"
                  fill="#FFFFFF"
                  stroke="#0284C7"
                  strokeWidth="3"
                />
                <text
                  x={pt.x}
                  y={pt.y - 12}
                  textAnchor="middle"
                  className="fill-[#101828] text-[11px] font-mono font-bold"
                >
                  {pt.item.value}
                  {unit}
                </text>
                <text
                  x={pt.x}
                  y={padTop + plotH + 22}
                  textAnchor="middle"
                  className="fill-[#475467] text-[11px] font-body font-medium"
                >
                  {pt.item.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 rounded-2xl border border-[#BAE6FD] bg-[#F8FAFC] p-6 sm:p-7 shadow-xs">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div className="flex items-start gap-3">
          <span className="p-2 rounded-xl bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] shrink-0">
            <BarChart3 className="w-4 h-4" />
          </span>
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-[#101828] tracking-[-0.02em]">
              {section.title}
            </h4>
            {section.subtitle && (
              <p className="text-xs text-[#667085] font-body mt-0.5">{section.subtitle}</p>
            )}
          </div>
        </div>

        {section.chartType === 'comparison' && (
          <div className="flex items-center gap-4 text-xs font-body">
            <span className="inline-flex items-center gap-1.5 text-[#475467]">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#94A3B8]" />
              {section.primarySeriesLabel || 'Before'}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#0369A1] font-semibold">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#0284C7]" />
              {section.secondarySeriesLabel || 'After DataLive'}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {section.items.map((item, idx) => {
          const primaryPct = Math.min(100, Math.max(4, Math.round((item.value / scaleMax) * 100)));
          const hasSecondary = typeof item.secondaryValue === 'number';
          const secondaryPct = hasSecondary
            ? Math.min(100, Math.max(4, Math.round(((item.secondaryValue || 0) / scaleMax) * 100)))
            : 0;

          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs sm:text-sm font-medium gap-3">
                <span className="text-[#101828] font-body">{item.label}</span>
                {hasSecondary ? (
                  <span className="font-mono text-xs shrink-0">
                    <span className="text-[#64748B]">
                      {item.value}
                      {unit}
                    </span>
                    <span className="mx-1.5 text-[#94A3B8]">&rarr;</span>
                    <span className="font-bold text-[#0284C7]">
                      {item.secondaryValue}
                      {unit}
                    </span>
                  </span>
                ) : (
                  <span className="font-mono font-bold text-[#0284C7] shrink-0">
                    {item.value}
                    {unit}
                  </span>
                )}
              </div>

              {hasSecondary ? (
                <div className="space-y-1.5">
                  <div className="h-2.5 w-full bg-white rounded-full overflow-hidden border border-[#E2E8F0]">
                    <div
                      className="h-full rounded-full bg-[#94A3B8] transition-all duration-700"
                      style={{ width: `${primaryPct}%` }}
                    />
                  </div>
                  <div className="h-2.5 w-full bg-white rounded-full overflow-hidden border border-[#BAE6FD]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0284C7] transition-all duration-700"
                      style={{ width: `${secondaryPct}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="h-3 w-full bg-white rounded-full overflow-hidden border border-[#BAE6FD]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0284C7] transition-all duration-700"
                    style={{ width: `${primaryPct}%` }}
                  />
                </div>
              )}

              {item.note && (
                <p className="text-[11px] text-[#667085] font-body">{item.note}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function BlogSectionRenderer({ section, links = [] }: BlogSectionRendererProps) {
  switch (section.type) {
    case 'heading': {
      const id = section.anchorId || slugifyHeading(section.text);
      if (section.level === 2) {
        return (
          <h2
            id={id}
            className="scroll-mt-28 font-display font-bold text-2xl sm:text-3xl text-[#101828] tracking-[-0.03em] mt-12 mb-4 leading-tight"
          >
            {section.text}
          </h2>
        );
      }
      return (
        <h3
          id={id}
          className="scroll-mt-28 font-display font-bold text-xl sm:text-2xl text-[#101828] tracking-[-0.02em] mt-8 mb-3 leading-snug"
        >
          {section.text}
        </h3>
      );
    }

    case 'paragraph': {
      return (
        <p className="font-body text-[15px] sm:text-[17px] text-[#344054] leading-[1.82] mb-6">
          {renderTextWithLinks(section.text, links)}
        </p>
      );
    }

    case 'list': {
      return (
        <div className="my-7 rounded-2xl bg-[#F9FAFB] border border-[#EAECF0] p-5 sm:p-6">
          {section.title && (
            <h4 className="font-display font-bold text-sm sm:text-base text-[#101828] mb-3.5">
              {section.title}
            </h4>
          )}
          <ul className="space-y-3">
            {section.items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 font-body text-sm sm:text-[15.5px] text-[#344054] leading-relaxed"
              >
                {section.style === 'numbered' ? (
                  <span className="w-6 h-6 rounded-full bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                ) : section.style === 'checklist' ? (
                  <CheckCircle2 className="w-4 h-4 text-[#12B76A] shrink-0 mt-1" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0 mt-2" />
                )}
                <span>{renderTextWithLinks(item, links)}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    case 'table': {
      return (
        <div className="my-8 w-full overflow-hidden rounded-2xl border border-[#BAE6FD] bg-white shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left font-body text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF] border-b border-[#BAE6FD]">
                  {section.headers.map((header, i) => (
                    <th
                      key={i}
                      className="px-5 py-3.5 font-mono font-bold text-xs text-[#0369A1] uppercase tracking-wider whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAECF0]">
                {section.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#F9FAFB] transition-colors">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`px-5 py-3.5 leading-relaxed ${
                          cIdx === 0
                            ? 'font-semibold text-[#101828]'
                            : 'text-[#475467]'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.caption && (
            <div className="px-5 py-2.5 bg-[#F9FAFB] border-t border-[#EAECF0] text-xs font-body text-[#667085] italic">
              {section.caption}
            </div>
          )}
        </div>
      );
    }

    case 'graph': {
      return <BlogGraphWidget section={section} />;
    }

    case 'image': {
      return (
        <figure className="my-8 overflow-hidden rounded-2xl border border-[#BAE6FD] bg-white shadow-xs">
          <div className="relative aspect-[16/9] w-full bg-[#080B14]">
            <Image
              src={section.src}
              alt={section.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 840px"
            />
          </div>
          {section.caption && (
            <figcaption className="px-5 py-3 bg-[#F9FAFB] text-xs font-body text-[#667085] text-center border-t border-[#EAECF0]">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case 'callout': {
      const isTip = section.variant === 'tip';
      const isQuote = section.variant === 'quote';

      return (
        <div
          className={`my-8 rounded-2xl p-6 border-l-4 ${
            isTip
              ? 'border-l-[#0284C7] bg-[#F0F9FF] border-t border-r border-b border-[#BAE6FD]'
              : isQuote
              ? 'border-l-[#101828] bg-[#F9FAFB] border-t border-r border-b border-[#EAECF0]'
              : 'border-l-[#0369A1] bg-[#F8FAFC] border-t border-r border-b border-[#E2E8F0]'
          }`}
        >
          <div className="flex gap-3.5">
            <span className="shrink-0 pt-0.5">
              {isTip && <Lightbulb className="w-5 h-5 text-[#0284C7]" />}
              {isQuote && <Quote className="w-5 h-5 text-[#101828]" />}
              {!isTip && !isQuote && <Info className="w-5 h-5 text-[#0369A1]" />}
            </span>
            <div className="space-y-1.5">
              <p className="font-body text-sm sm:text-base text-[#101828] font-medium leading-relaxed">
                {renderTextWithLinks(section.text, links)}
              </p>
              {section.citation && (
                <p className="font-mono text-xs text-[#667085] font-semibold uppercase tracking-wider">
                  — {section.citation}
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    case 'cta': {
      return (
        <div className="my-10 rounded-3xl bg-gradient-to-br from-[#080B14] to-[#0F172A] border border-[#0284C7]/40 p-7 sm:p-9 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              {section.title}
            </h4>
            <p className="font-body text-sm text-slate-300 leading-relaxed">
              {section.description}
            </p>
          </div>
          <Link
            href={section.buttonHref}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold shadow-md transition-all"
          >
            <span>{section.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      );
    }
  }
}
