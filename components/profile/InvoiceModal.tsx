"use client";

export interface BillingRecord {
  id: string;
  dueDate: string;
  description: string;
  status: "Paid" | "Pending" | "Overdue";
  invoiceTotal: string;
  issueDate: string;
  invoiceId: string;
  accountNumber: string;
  paymentMethod?: string;
  subscription: {
    name: string;
    description: string;
    price: string;
  };
  oneTimeCharges?: string;
  taxes: string;
  total: string;
}

interface InvoiceModalProps {
  invoice: BillingRecord;
  onClose: () => void;
  onDownloadPDF: () => void;
}

export default function InvoiceModal({
  invoice,
  onClose,
  onDownloadPDF,
}: InvoiceModalProps) {
  return (
    <>
      {/* Blur Overlay */}
      <div
        className="fixed inset-0 backdrop-blur-md bg-black/40 z-50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
        <div className="relative w-full max-w-2xl bg-[#1a1a1a] rounded-lg shadow-2xl p-8 pointer-events-auto">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-[#FE9A00] transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            {/* Invoice Icon */}
            <div className="w-10 h-10 rounded bg-[#2a2a2a] flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
                  stroke="#FE9A00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20"
                  stroke="#FE9A00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9H8"
                  stroke="#FE9A00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="#FE9A00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="#FE9A00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-white text-xl ">Monthly invoice</h2>
            <span className="bg-[#91C483] text-white text-xs font-medium px-3 py-1 rounded">
              {invoice.status}
            </span>
          </div>

          {/* Invoice Details */}
          <div className="space-y-6 mb-8">
            {/* Two Column Layout: Due date/Invoice number | Status/Payment method */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Due date</p>
                  <p className="text-white font-bold">{invoice.dueDate}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Invoice number</p>
                  <p className="text-[#FE9A00] font-bold">{invoice.invoiceId}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Status</p>
                  <p className="text-white font-bold">{invoice.status}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Payment method</p>
                  <p className="text-white font-bold">
                    {invoice.paymentMethod || "MASTERCARD 2327"}
                  </p>
                </div>
              </div>
            </div>

            {/* Billing Summary */}
            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-white font-bold mb-4">Pro Membership Plan</h3>
              <div className="space-y-4">
                {/* One-time charges */}
                {invoice.oneTimeCharges && (
                  <div className="flex justify-between">
                    <p className="text-white">One-time charges and credits</p>
                    <p className="text-white">{invoice.oneTimeCharges}</p>
                  </div>
                )}

                {/* Taxes */}
                <div className="flex justify-between">
                  <p className="text-white">Taxes</p>
                  <p className="text-white">{invoice.taxes}</p>
                </div>

                {/* Total */}
                <div className="flex justify-between border-t border-gray-700 pt-4">
                  <p className="text-white font-bold text-lg">Total</p>
                  <p className="text-white font-bold text-lg">{invoice.total}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Download PDF Button */}
          <button
            type="button"
            onClick={onDownloadPDF}
            className="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-lg px-6 py-3 hover:bg-[#3a3a3a] transition-colors font-medium flex items-center justify-center gap-2"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25 7.5L9 11.25L12.75 7.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11.25V2.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
}

