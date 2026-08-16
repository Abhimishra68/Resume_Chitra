import React from 'react';

export const DashboardMockup: React.FC = () => {
  return (
    <div className="w-full h-40 sm:h-44 bg-white rounded-xl p-2.5 text-slate-800 flex flex-col justify-between overflow-hidden shadow-sm font-sans select-none border border-slate-200">
      {/* Top Header line */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-1 text-[8.5px]">
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
          <span className="font-bold text-slate-800">Sales Overview</span>
        </div>
        <div className="flex items-center space-x-1 text-[7.5px] text-slate-400">
          <span>Q1-Q4 Trend</span>
          <span className="bg-cyan-50 text-cyan-600 px-1 rounded font-semibold">Active</span>
        </div>
      </div>

      {/* 4 Mini KPI Cards */}
      <div className="grid grid-cols-4 gap-1 my-1">
        <div className="bg-slate-50 p-1 rounded border border-slate-100">
          <div className="text-[6.5px] text-slate-400 uppercase font-medium">Revenue</div>
          <div className="text-[9px] font-bold text-slate-800">$4.24M</div>
        </div>
        <div className="bg-slate-50 p-1 rounded border border-slate-100">
          <div className="text-[6.5px] text-slate-400 uppercase font-medium">Orders</div>
          <div className="text-[9px] font-bold text-slate-800">28.4K</div>
        </div>
        <div className="bg-slate-50 p-1 rounded border border-slate-100">
          <div className="text-[6.5px] text-slate-400 uppercase font-medium">AOV</div>
          <div className="text-[9px] font-bold text-slate-800">$149</div>
        </div>
        <div className="bg-slate-50 p-1 rounded border border-slate-100">
          <div className="text-[6.5px] text-slate-400 uppercase font-medium">Growth</div>
          <div className="text-[9px] font-bold text-emerald-600">+14.2%</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-1 flex-1 items-end pt-0.5">
        {/* Monthly Trend Area Chart */}
        <div className="bg-slate-50/70 p-1 rounded border border-slate-100 col-span-2 h-full flex flex-col justify-between">
          <div className="text-[6.5px] text-slate-500 font-semibold">Monthly Sales Trend</div>
          <svg className="w-full h-12" viewBox="0 0 160 45" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cyanGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 Q25,32 50,22 T100,16 T160,6 L160,45 L0,45 Z"
              fill="url(#cyanGrad2)"
            />
            <path
              d="M0,40 Q25,32 50,22 T100,16 T160,6"
              fill="none"
              stroke="#0891b2"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Donut & Mini Bar */}
        <div className="bg-slate-50/70 p-1 rounded border border-slate-100 h-full flex flex-col justify-between items-center">
          <div className="text-[6.5px] text-slate-500 font-semibold self-start">Region</div>
          <div className="relative w-8 h-8 my-auto flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="4"
                strokeDasharray="65, 100"
                strokeLinecap="round"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#0284c7"
                strokeWidth="4"
                strokeDasharray="25, 100"
                strokeDashoffset="-65"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[7px] font-bold text-slate-700">65%</span>
          </div>
          {/* 3 mini bar bars */}
          <div className="flex gap-0.5 items-end h-3 w-full justify-center">
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-t-xs"></div>
            <div className="w-1.5 h-2.5 bg-cyan-500 rounded-t-xs"></div>
            <div className="w-1.5 h-2 bg-blue-500 rounded-t-xs"></div>
            <div className="w-1.5 h-3 bg-cyan-600 rounded-t-xs"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChurnModelMockup: React.FC = () => {
  return (
    <div className="w-full h-40 sm:h-44 bg-white rounded-xl p-2.5 text-slate-800 flex flex-col justify-between overflow-hidden shadow-sm font-sans select-none border border-slate-200">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-1 text-[8.5px]">
        <div className="flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span className="font-bold text-slate-800">Pipeline Flow</span>
        </div>
        <span className="text-[7.5px] font-mono bg-blue-50 text-blue-700 px-1 rounded font-semibold">
          Accuracy: 86%
        </span>
      </div>

      {/* Flowchart Diagram */}
      <div className="flex-1 flex flex-col justify-around py-1 relative">
        {/* Top Node */}
        <div className="flex justify-center">
          <div className="bg-sky-50 border border-sky-200 text-sky-900 text-[7px] px-2 py-0.5 rounded shadow-2xs font-medium">
            Customer Raw Data (PostgreSQL)
          </div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center -my-0.5">
          <div className="w-0.5 h-1.5 bg-slate-300"></div>
        </div>

        {/* Preprocessing Row */}
        <div className="grid grid-cols-2 gap-1.5 max-w-[190px] mx-auto">
          <div className="bg-slate-50 border border-slate-200 text-slate-700 text-[6.5px] p-0.5 rounded text-center">
            Feature Scaling
          </div>
          <div className="bg-slate-50 border border-slate-200 text-slate-700 text-[6.5px] p-0.5 rounded text-center">
            One-Hot Encoding
          </div>
        </div>

        {/* Down Connector */}
        <div className="flex justify-center -my-0.5">
          <div className="w-20 border-b border-slate-300 h-1"></div>
        </div>

        {/* Model Selection */}
        <div className="grid grid-cols-3 gap-1 max-w-[220px] mx-auto">
          <div className="bg-white border border-slate-200 text-slate-500 text-[6px] p-0.5 rounded text-center">
            LogReg (79%)
          </div>
          <div className="bg-blue-600 text-white font-bold text-[6.5px] p-0.5 rounded text-center shadow-2xs">
            Random Forest (86%)
          </div>
          <div className="bg-white border border-slate-200 text-slate-500 text-[6px] p-0.5 rounded text-center">
            XGBoost (85%)
          </div>
        </div>

        {/* Down Connector */}
        <div className="flex justify-center -my-0.5">
          <div className="w-0.5 h-1.5 bg-blue-500"></div>
        </div>

        {/* Outcome */}
        <div className="grid grid-cols-2 gap-1.5 max-w-[190px] mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-[6.5px] p-0.5 rounded text-center font-medium">
            Low Churn Risk
          </div>
          <div className="bg-rose-50 border border-rose-200 text-rose-800 text-[6.5px] p-0.5 rounded text-center font-medium">
            Retention Action
          </div>
        </div>
      </div>
    </div>
  );
};

export const MarketBasketMockup: React.FC = () => {
  return (
    <div className="w-full h-40 sm:h-44 bg-white rounded-xl p-2.5 text-slate-800 flex flex-col justify-between overflow-hidden shadow-sm font-sans select-none border border-slate-200">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-1 text-[8.5px]">
        <div className="flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span className="font-bold text-slate-800">Market Basket Analysis</span>
        </div>
        <span className="text-[7.5px] font-mono bg-emerald-50 text-emerald-700 px-1 rounded font-semibold">
          Apriori Rules
        </span>
      </div>

      {/* Rules Table */}
      <div className="flex-1 my-1 overflow-hidden">
        <table className="w-full text-left border-collapse text-[7px]">
          <thead>
            <tr className="border-b border-slate-200 text-slate-400 font-mono">
              <th className="py-0.5 px-0.5 font-semibold">Item A</th>
              <th className="py-0.5 px-0.5 font-semibold">Item B</th>
              <th className="py-0.5 px-0.5 text-right font-semibold">Supp.</th>
              <th className="py-0.5 px-0.5 text-right font-semibold">Conf.</th>
              <th className="py-0.5 px-0.5 text-right font-semibold">Lift</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
            <tr className="bg-cyan-50/50">
              <td className="py-0.5 px-0.5 font-medium text-slate-900">Bread, Milk</td>
              <td className="py-0.5 px-0.5 text-cyan-800 font-medium">Butter</td>
              <td className="py-0.5 px-0.5 text-right text-slate-500">0.084</td>
              <td className="py-0.5 px-0.5 text-right font-bold text-slate-900">0.86</td>
              <td className="py-0.5 px-0.5 text-right font-bold text-emerald-600">2.64</td>
            </tr>
            <tr>
              <td className="py-0.5 px-0.5 font-medium text-slate-900">Espresso</td>
              <td className="py-0.5 px-0.5 text-cyan-800 font-medium">Filter Mug</td>
              <td className="py-0.5 px-0.5 text-right text-slate-500">0.052</td>
              <td className="py-0.5 px-0.5 text-right font-bold text-slate-900">0.78</td>
              <td className="py-0.5 px-0.5 text-right font-bold text-emerald-600">2.31</td>
            </tr>
            <tr>
              <td className="py-0.5 px-0.5 font-medium text-slate-900">Keyboard</td>
              <td className="py-0.5 px-0.5 text-cyan-800 font-medium">Ergo Mouse</td>
              <td className="py-0.5 px-0.5 text-right text-slate-500">0.091</td>
              <td className="py-0.5 px-0.5 text-right font-bold text-slate-900">0.74</td>
              <td className="py-0.5 px-0.5 text-right font-bold text-emerald-600">1.95</td>
            </tr>
            <tr>
              <td className="py-0.5 px-0.5 font-medium text-slate-900">Gym Shaker</td>
              <td className="py-0.5 px-0.5 text-cyan-800 font-medium">Whey 2kg</td>
              <td className="py-0.5 px-0.5 text-right text-slate-500">0.067</td>
              <td className="py-0.5 px-0.5 text-right font-bold text-slate-900">0.82</td>
              <td className="py-0.5 px-0.5 text-right font-bold text-emerald-600">2.18</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer bar */}
      <div className="bg-slate-50 rounded px-1.5 py-0.5 flex justify-between items-center text-[6.5px] text-slate-500">
        <span>250K Transactions</span>
        <span className="text-emerald-600 font-semibold">+15% Cross-Sell</span>
      </div>
    </div>
  );
};
