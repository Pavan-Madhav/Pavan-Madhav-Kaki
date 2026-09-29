import React, { useState } from 'react';
import { X, Play, Code, CheckCircle, Copy, RotateCcw, AlertCircle, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../portfolioConfig';

interface ProjectSimulatorModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectSimulatorModal: React.FC<ProjectSimulatorModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'code'>('simulator');
  const [copiedCode, setCopiedCode] = useState(false);

  // States for Voter Eligibility Calculator
  const [voterAge, setVoterAge] = useState<string>('');
  const [voterResult, setVoterResult] = useState<{ status: 'eligible' | 'underage' | 'invalid'; message: string; yearsLeft?: number } | null>(null);

  // States for ATM Management System
  const [atmBalance, setAtmBalance] = useState<number>(1000.0);
  const [atmAmount, setAtmAmount] = useState<string>('');
  const [atmLogs, setAtmLogs] = useState<string[]>(['[System Initialized] Account opened with initial balance of $1,000.00']);
  const [atmStatusMsg, setAtmStatusMsg] = useState<{ text: string; isError?: boolean } | null>(null);

  // States for Student Grade Calculator
  const [grades, setGrades] = useState<{ [subject: string]: string }>({
    Mathematics: '88',
    'Programming (Python)': '94',
    Physics: '82',
    English: '85',
  });
  const [gradeResult, setGradeResult] = useState<{
    total: number;
    max: number;
    percentage: number;
    gradeLetter: string;
    remarks: string;
  } | null>(null);

  if (!project) return null;

  // Voter simulation handler
  const handleRunVoter = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNum = parseInt(voterAge, 10);
    if (isNaN(ageNum)) {
      setVoterResult({ status: 'invalid', message: 'Error: Please enter a valid whole number for age.' });
      return;
    }
    if (ageNum < 0) {
      setVoterResult({ status: 'invalid', message: 'Invalid age: Age cannot be a negative value.' });
      return;
    }
    if (ageNum === 0) {
      setVoterResult({ status: 'invalid', message: 'Invalid input: Please enter a realistic living age (1-120).' });
      return;
    }
    if (ageNum > 125) {
      setVoterResult({ status: 'invalid', message: 'Boundary notice: Please enter a realistic age within 125 years.' });
      return;
    }

    if (ageNum >= 18) {
      setVoterResult({
        status: 'eligible',
        message: `Eligible to Vote! User is ${ageNum} years old (meets legal 18+ threshold).`,
      });
    } else {
      const diff = 18 - ageNum;
      setVoterResult({
        status: 'underage',
        message: `Not yet eligible. User is ${ageNum} years old. Eligible to register in ${diff} year${diff > 1 ? 's' : ''}.`,
        yearsLeft: diff,
      });
    }
  };

  // ATM simulation handlers
  const handleAtmDeposit = () => {
    const amt = parseFloat(atmAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmStatusMsg({ text: 'Deposit failed: Please enter a valid positive dollar amount.', isError: true });
      return;
    }
    const newBal = atmBalance + amt;
    setAtmBalance(newBal);
    setAtmLogs((prev) => [`Deposited +$${amt.toFixed(2)} | Balance: $${newBal.toFixed(2)}`, ...prev.slice(0, 7)]);
    setAtmStatusMsg({ text: `Successfully credited $${amt.toFixed(2)} into account.` });
    setAtmAmount('');
  };

  const handleAtmWithdraw = () => {
    const amt = parseFloat(amtAmount(atmAmount));
    if (isNaN(amt) || amt <= 0) {
      setAtmStatusMsg({ text: 'Withdrawal failed: Please enter a positive amount.', isError: true });
      return;
    }
    if (amt > atmBalance) {
      setAtmStatusMsg({ text: `Insufficient funds! Requested $${amt.toFixed(2)} exceeds balance of $${atmBalance.toFixed(2)}.`, isError: true });
      return;
    }
    const newBal = atmBalance - amt;
    setAtmBalance(newBal);
    setAtmLogs((prev) => [`Withdrew -$${amt.toFixed(2)} | Balance: $${newBal.toFixed(2)}`, ...prev.slice(0, 7)]);
    setAtmStatusMsg({ text: `Dispensed $${amt.toFixed(2)}. Updated balance: $${newBal.toFixed(2)}.` });
    setAtmAmount('');
  };

  function amtAmount(val: string) {
    return val;
  }

  const handleAtmReset = () => {
    setAtmBalance(1000.0);
    setAtmAmount('');
    setAtmLogs(['[Reset] Session restarted with base $1,000.00 balance']);
    setAtmStatusMsg(null);
  };

  // Grade calculation handler
  const handleCalculateGrades = (e: React.FormEvent) => {
    e.preventDefault();
    const subjects = Object.keys(grades);
    let total = 0;
    const max = subjects.length * 100;

    for (const sub of subjects) {
      const val = parseFloat(grades[sub]);
      if (isNaN(val) || val < 0 || val > 100) {
        alert(`Invalid score for ${sub}. Please enter a score between 0 and 100.`);
        return;
      }
      total += val;
    }

    const percentage = (total / max) * 100;
    let gradeLetter = 'F';
    let remarks = 'Needs Improvement';

    if (percentage >= 90) {
      gradeLetter = 'A+';
      remarks = 'Outstanding Performance';
    } else if (percentage >= 80) {
      gradeLetter = 'A';
      remarks = 'Excellent Academic Standing';
    } else if (percentage >= 70) {
      gradeLetter = 'B';
      remarks = 'Good Performance';
    } else if (percentage >= 60) {
      gradeLetter = 'C';
      remarks = 'Satisfactory';
    } else if (percentage >= 50) {
      gradeLetter = 'D';
      remarks = 'Passing Grade';
    }

    setGradeResult({
      total,
      max,
      percentage,
      gradeLetter,
      remarks,
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonSourceCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 rounded">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">Python 3 Implementation</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 bg-white px-6">
          <button
            type="button"
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'simulator'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Interactive Simulator</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'code'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>View Python Code</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'simulator' && (
            <div>
              {/* Project 1: Voter Eligibility Simulator */}
              {project.id === 'voter-eligibility' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 text-xs text-slate-600 leading-relaxed">
                    <strong>Logic Demonstration:</strong> Tests conditional branching (<code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">if-elif-else</code>) and boundary validation against the voting threshold of 18.
                  </div>

                  <form onSubmit={handleRunVoter} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Test Input: Enter Citizen Age (Years)
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={voterAge}
                          onChange={(e) => setVoterAge(e.target.value)}
                          placeholder="e.g. 17, 18, 21, 65"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                          type="submit"
                          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                        >
                          Evaluate Age
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Preset quick buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-slate-500">Quick Test Cases:</span>
                    {[
                      { label: 'Minor (16)', val: '16' },
                      { label: 'Threshold (18)', val: '18' },
                      { label: 'Adult (24)', val: '24' },
                      { label: 'Boundary (0)', val: '0' },
                      { label: 'Negative (-3)', val: '-3' },
                    ].map((btn, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setVoterAge(btn.val);
                          setVoterResult(null);
                        }}
                        className="text-xs px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Output Terminal Area */}
                  {voterResult && (
                    <div
                      className={`p-4 rounded-xl border text-sm font-sans ${
                        voterResult.status === 'eligible'
                          ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                          : voterResult.status === 'underage'
                          ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                          : 'bg-rose-50/80 border-rose-200 text-rose-900'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        {voterResult.status === 'eligible' ? (
                          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        ) : voterResult.status === 'underage' ? (
                          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-semibold">{voterResult.message}</p>
                          {voterResult.yearsLeft && (
                            <p className="text-xs mt-1 opacity-90">
                              System calculation formula: <code className="font-mono bg-white/70 px-1 py-0.5 rounded">18 - {voterAge} = {voterResult.yearsLeft} year(s) remaining</code>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Project 2: ATM Management Simulator */}
              {project.id === 'atm-management' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 text-xs text-slate-600 leading-relaxed">
                    <strong>System Workflow:</strong> Emulates an interactive menu-driven ATM session with balance retention, validation guards, and a real-time audit ledger.
                  </div>

                  {/* Balance Display */}
                  <div className="p-4 bg-slate-900 text-white rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 font-mono block">ACCOUNT BALANCE</span>
                      <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-emerald-400">
                        ${atmBalance.toFixed(2)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleAtmReset}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
                      title="Reset balance"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  </div>

                  {/* Transaction Actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-6">
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Amount ($)
                      </label>
                      <input
                        type="number"
                        min="1"
                        step="any"
                        value={atmAmount}
                        onChange={(e) => setAtmAmount(e.target.value)}
                        placeholder="Enter amount (e.g. 50, 150)"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="sm:col-span-3 flex items-end">
                      <button
                        type="button"
                        onClick={handleAtmDeposit}
                        className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
                      >
                        + Deposit
                      </button>
                    </div>
                    <div className="sm:col-span-3 flex items-end">
                      <button
                        type="button"
                        onClick={handleAtmWithdraw}
                        className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
                      >
                        - Withdraw
                      </button>
                    </div>
                  </div>

                  {/* Notification Status */}
                  {atmStatusMsg && (
                    <div
                      className={`p-3 rounded-lg text-xs font-medium ${
                        atmStatusMsg.isError
                          ? 'bg-rose-50 text-rose-800 border border-rose-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {atmStatusMsg.text}
                    </div>
                  )}

                  {/* Session Statement Log */}
                  <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                      Recent Session Statement (Audit Log)
                    </span>
                    <ul className="space-y-1.5 text-xs font-mono text-slate-700">
                      {atmLogs.map((log, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-slate-400">•</span>
                          <span>{log}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Project 3: Student Grade Calculator */}
              {project.id === 'grade-calculator' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 text-xs text-slate-600 leading-relaxed">
                    <strong>Logic Process:</strong> Accepts marks out of 100 per subject, computes aggregated percentage, and classifies performance into defined grade tiers.
                  </div>

                  <form onSubmit={handleCalculateGrades} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.keys(grades).map((sub) => (
                        <div key={sub}>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            {sub} <span className="text-slate-400 text-[11px]">(0-100)</span>
                          </label>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={grades[sub]}
                            onChange={(e) =>
                              setGrades({ ...grades, [sub]: e.target.value })
                            }
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
                    >
                      <span>Compute Results &amp; Grade</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  {/* Grade Results Card */}
                  {gradeResult && (
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-3">
                        <div className="p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Total Marks</span>
                          <span className="text-lg font-bold text-slate-900 font-mono">
                            {gradeResult.total} / {gradeResult.max}
                          </span>
                        </div>
                        <div className="p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Percentage</span>
                          <span className="text-lg font-bold text-blue-600 font-mono">
                            {gradeResult.percentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Assigned Grade</span>
                          <span className="text-lg font-bold text-emerald-600 font-mono">
                            {gradeResult.gradeLetter}
                          </span>
                        </div>
                        <div className="p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Status</span>
                          <span className="text-xs font-semibold text-slate-800 mt-1 block">
                            {gradeResult.remarks}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-mono">
                  Pure Python 3 Implementation
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Code Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto max-h-[380px] border border-slate-800">
                <code>{project.pythonSourceCode}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Interactive Simulator Ready</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
