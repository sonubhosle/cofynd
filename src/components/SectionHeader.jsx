import React from 'react';

export const SectionHeader = ({ highlight, rest }) => (
    <div className="text-center mb-12 pt-8">
        <h2 className="text-3xl  text-slate-900 relative z-10 leading-tight">
            <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 -translate-x-2 md:-translate-x-3 translate-y-1 md:translate-y-2 w-16 h-16 bg-amber-200 rounded-full -z-10"></span>
                <span className="relative z-10">{highlight}</span>
            </span>
            <span className="ml-2">{rest}</span>
        </h2>
        <div className="w-14 h-[2px] bg-blue-600 mx-auto mt-3"></div>
    </div>
);
