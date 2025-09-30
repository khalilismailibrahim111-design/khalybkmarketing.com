import { useState } from "react";

export default function App() {
  const [showPayment, setShowPayment] = useState(false);
  const [manualOpen, setManualOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [afterPayment, setAfterPayment] = useState(false);

  const handleVerify = () => {
    const ref = document.getElementById("tx-ref").value.trim();
    if (!ref) {
      alert("Enter bank transaction reference");
      return;
    }
    setStatus(`Manual payment reference submitted: ${ref}. Await admin verification.`);
    setTimeout(() => {
      setStatus(`Payment verified (ref: ${ref}). Click the Join button to open the Telegram group.`);
      setAfterPayment(true);
    }, 1500);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {!showPayment ? (
        <section className="flex flex-col items-center justify-center h-screen text-center px-4">
          <div className="w-44 h-44 rounded-xl overflow-hidden mb-6">
            <img src="5884163491567358376.jpg" alt="KHALYBK FX Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-yellow-400 mb-4">KHALYBK FOREX TRADING ACADEMY</h1>
          <p className="text-gray-300 max-w-md mb-6">
            For signal access, if you want to join my Telegram group click below.
          </p>
          <button
            onClick={() => setShowPayment(true)}
            className="px-6 py-3 text-lg font-semibold bg-yellow-400 text-black rounded-lg hover:bg-yellow-300"
          >
            Learn More
          </button>
        </section>
      ) : (
        <div className="max-w-2xl mx-auto my-12 p-6 bg-neutral-900 rounded-xl shadow-lg">
          <div className="bg-neutral-800 p-4 rounded-lg text-center text-yellow-400 font-bold text-lg mb-5">
            KHALYBK FOREX TRADING SIGNAL — One Month Access
          </div>

          <div className="flex flex-col items-center text-center mb-4">
            <div className="w-24 h-24 rounded-xl overflow-hidden mb-3">
              <img src="5884163491567358376.jpg" alt="KHALYBK FX Logo" />
            </div>
            <h1 className="text-xl font-bold text-yellow-400">KHALYBK FX — Premium Forex Signals</h1>
            <p className="text-gray-300 text-sm mt-1">Subscribe now to access one month of exclusive trading signals.</p>
          </div>

          <div className="p-4 rounded-lg border border-neutral-700 bg-neutral-800">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <div className="text-sm text-gray-400">One-time access fee</div>
                <div className="text-2xl font-bold text-yellow-400">₦10,000</div>
                <div className="text-gray-400 text-sm">Includes one-month signals, trade ideas, and market commentary.</div>
              </div>
              <div className="min-w-[240px]">
                <label className="text-sm text-gray-400">Your email (for payment receipt)</label>
                <input type="text" id="email" placeholder="you@example.com" className="w-full mt-1 p-2 rounded bg-neutral-900 border border-neutral-700 text-white" />
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => setManualOpen(!manualOpen)}
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold"
              >
                Manual bank transfer
              </button>
            </div>

            {status && (
              <div className="mt-3 p-3 bg-emerald-900 border border-emerald-700 text-emerald-100 rounded-lg">
                {status}
              </div>
            )}

            {afterPayment && (
              <div className="mt-4">
                <div className="text-sm text-gray-400 mb-1">Payment confirmed — click to join:</div>
                <a href="https://t.me/+RK26MjhMOLgxYWFk" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold inline-block">
                  Join Telegram Group
                </a>
              </div>
            )}

            {manualOpen && (
              <div className="mt-4">
                <div className="text-sm text-gray-400">Bank transfer details</div>
                <div className="mt-2 space-y-1 text-sm">
                  <div>Bank: <strong>OPAY BANK</strong></div>
                  <div>Account name: <strong>KHALIL ISMAIL IBRAHIM</strong></div>
                  <div>Account number: <strong>7089190726</strong></div>
                  <div className="text-gray-400 text-xs mt-2">After transfer, send your transaction reference in the box below and click <strong>Verify Manual Payment</strong>.</div>
                </div>
                <div className="mt-3 flex gap-2">
                  <input id="tx-ref" type="text" placeholder="Enter bank TX reference" className="flex-1 p-2 rounded bg-neutral-900 border border-neutral-700 text-white" />
                  <button onClick={handleVerify} className="px-3 py-2 bg-yellow-400 text-black rounded-lg font-semibold">
                    Verify Manual Payment
                  </button>
                </div>
              </div>
            )}

            <div className="text-xs text-gray-400 mt-4">By paying you agree to the terms. If you have questions, contact admin.</div>
          </div>

          <footer className="text-center text-gray-500 text-xs mt-4">
            Need help? Contact our Telegram admin or support email.
          </footer>
        </div>
      )}
    </div>
  );
}
