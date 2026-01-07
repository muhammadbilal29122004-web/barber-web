"use client";

import { useState } from "react";
import InvoiceModal, { BillingRecord } from "./InvoiceModal";

export default function BillingHistoryForm() {
  const [selectedInvoice, setSelectedInvoice] = useState<BillingRecord | null>(null);

  const billingRecords: BillingRecord[] = [
    {
      id: "1",
      dueDate: "December 17, 2025",
      description: "Monthly invoice",
      status: "Paid",
      invoiceTotal: "$40.00",
      issueDate: "December 12, 2026",
      invoiceId: "KDHJRJUX-0002",
      accountNumber: "MASTERD-0027",
      paymentMethod: "MASTERCARD 2327",
      subscription: {
        name: "Pro Membership Plan",
        description: "",
        price: "",
      },
      oneTimeCharges: "$20.00",
      taxes: "$0.00",
      total: "$40.00",
    },
    {
      id: "2",
      dueDate: "August 12, 2026",
      description: "Monthly invoice",
      status: "Paid",
      invoiceTotal: "$40.00",
      issueDate: "August 12, 2026",
      invoiceId: "KDHJRJUX-0001",
      accountNumber: "MASTERD-0027",
      paymentMethod: "MASTERCARD 2327",
      subscription: {
        name: "Pro Membership Plan",
        description: "",
        price: "",
      },
      oneTimeCharges: "$20.00",
      taxes: "$0.00",
      total: "$40.00",
    },
    {
      id: "3",
      dueDate: "April 12, 2026",
      description: "Monthly invoice",
      status: "Paid",
      invoiceTotal: "$40.00",
      issueDate: "April 12, 2026",
      invoiceId: "KDHJRJUX-0000",
      accountNumber: "MASTERD-0027",
      paymentMethod: "MASTERCARD 2327",
      subscription: {
        name: "Pro Membership Plan",
        description: "",
        price: "",
      },
      oneTimeCharges: "$20.00",
      taxes: "$0.00",
      total: "$40.00",
    },
    {
      id: "4",
      dueDate: "January 12, 2026",
      description: "Monthly invoice",
      status: "Paid",
      invoiceTotal: "$40.00",
      issueDate: "January 12, 2026",
      invoiceId: "KDHJRJUX-9999",
      accountNumber: "MASTERD-0027",
      paymentMethod: "MASTERCARD 2327",
      subscription: {
        name: "Pro Membership Plan",
        description: "",
        price: "",
      },
      oneTimeCharges: "$20.00",
      taxes: "$0.00",
      total: "$40.00",
    },
  ];

  const handleRowClick = (record: BillingRecord, e: React.MouseEvent) => {
    // Only open modal if clicking on the arrow button or the row (not the button itself)
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("td:last-child")) {
      setSelectedInvoice(record);
    } else {
      setSelectedInvoice(record);
    }
  };

  const handleCloseModal = () => {
    setSelectedInvoice(null);
  };

  const handleDownloadPDF = () => {
    // Handle PDF download
    if (selectedInvoice) {
      console.log("Download PDF for invoice:", selectedInvoice.invoiceId);
    }
  };

  return (
    <>
      <div className="bg-[#1a1a1a] rounded-lg p-8">
        <h2 className="text-white text-lg  mb-6">Billing</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-4 px-4 text-gray-400 text-sm font-medium">
                Due date
              </th>
              <th className="text-left py-4 px-4 text-gray-400 text-sm font-medium">
                Description
              </th>
              <th className="text-left py-4 px-4 text-gray-400 text-sm font-medium">
                Status
              </th>
              <th className="text-left py-4 px-4 text-gray-400 text-sm font-medium">
                Invoice total
              </th>
              <th className="w-12"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {billingRecords.map((record, index) => (
              <tr
                key={record.id}
                className={`
                  border-b border-gray-700 cursor-pointer hover:bg-[#2a2a2a] transition-colors
                  ${index === billingRecords.length - 1 ? "border-b-0" : ""}
                `}
                onClick={(e) => handleRowClick(record, e)}
              >
                <td className="py-4 px-4 text-white text-sm">
                  {record.dueDate}
                </td>
                <td className="py-4 px-4 text-white text-sm">
                  {record.description}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`
                      inline-block px-3 py-1 rounded text-xs font-medium
                      ${
                        record.status === "Paid"
                          ? "bg-[#91C483] text-white"
                          : record.status === "Pending"
                          ? "bg-yellow-500 text-white"
                          : "bg-red-500 text-white"
                      }
                    `}
                  >
                    {record.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-white text-sm">
                  {record.invoiceTotal}
                </td>
                <td className="py-4 px-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedInvoice(record);
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="View invoice details"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      {/* Invoice Modal */}
      {selectedInvoice && (
        <InvoiceModal
          invoice={selectedInvoice}
          onClose={handleCloseModal}
          onDownloadPDF={handleDownloadPDF}
        />
      )}
    </>
  );
}

