// components/DocumentManager.jsx
"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  Share2,
  Trash2,
  Edit,
  Search,
  Filter,
  Calendar,
  User,
  Clock,
  Paperclip,
  Upload,
  Folder,
  File,
  FolderOpen,
  CheckCircle,
  XCircle,
  MoreVertical,
  ExternalLink,
} from "lucide-react";

export function DocumentManager({ userRole = "agent" }) {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Property_Contract_Sandton.pdf",
      type: "pdf",
      size: "2.3 MB",
      category: "Contracts",
      uploadedBy: "John Agent",
      uploadDate: "2024-02-15",
      status: "signed",
      downloads: 12,
      sharedWith: ["Admin", "Legal"],
    },
    {
      id: 2,
      name: "Inspection_Report_Morningside.docx",
      type: "doc",
      size: "1.8 MB",
      category: "Reports",
      uploadedBy: "Inspector",
      uploadDate: "2024-02-14",
      status: "pending",
      downloads: 5,
      sharedWith: ["Admin", "John Agent"],
    },
    {
      id: 3,
      name: "Commission_Statement_Feb.xlsx",
      type: "xlsx",
      size: "3.1 MB",
      category: "Financial",
      uploadedBy: "Finance",
      uploadDate: "2024-02-13",
      status: "approved",
      downloads: 8,
      sharedWith: ["Admin", "John Agent"],
    },
    {
      id: 4,
      name: "Property_Photos.zip",
      type: "zip",
      size: "24.5 MB",
      category: "Media",
      uploadedBy: "Photographer",
      uploadDate: "2024-02-12",
      status: "processed",
      downloads: 15,
      sharedWith: ["All Agents", "Admin"],
    },
    {
      id: 5,
      name: "Market_Analysis_Q1.pdf",
      type: "pdf",
      size: "4.2 MB",
      category: "Analysis",
      uploadedBy: "Analytics",
      uploadDate: "2024-02-10",
      status: "published",
      downloads: 23,
      sharedWith: ["Management", "All Agents"],
    },
    {
      id: 6,
      name: "Client_Agreement_Draft.docx",
      type: "doc",
      size: "1.5 MB",
      category: "Contracts",
      uploadedBy: "Legal",
      uploadDate: "2024-02-09",
      status: "draft",
      downloads: 3,
      sharedWith: ["Admin"],
    },
  ]);

  const [categories] = useState([
    { name: "All", count: documents.length },
    {
      name: "Contracts",
      count: documents.filter((d) => d.category === "Contracts").length,
    },
    {
      name: "Reports",
      count: documents.filter((d) => d.category === "Reports").length,
    },
    {
      name: "Financial",
      count: documents.filter((d) => d.category === "Financial").length,
    },
    {
      name: "Media",
      count: documents.filter((d) => d.category === "Media").length,
    },
    {
      name: "Analysis",
      count: documents.filter((d) => d.category === "Analysis").length,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const filteredDocs = documents.filter((doc) => {
    const matchesCategory =
      selectedCategory === "All" || doc.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate file upload
    setTimeout(() => {
      const newDoc = {
        id: documents.length + 1,
        name: "New_Document.pdf",
        type: "pdf",
        size: "1.2 MB",
        category: "Contracts",
        uploadedBy: userRole === "agent" ? "John Agent" : "Admin",
        uploadDate: new Date().toISOString().split("T")[0],
        status: "uploaded",
        downloads: 0,
        sharedWith: [userRole === "agent" ? "Admin" : "John Agent"],
      };

      setDocuments([newDoc, ...documents]);
      setIsUploading(false);
      alert("Document uploaded successfully!");
    }, 1500);
  };

  const handleDownload = (doc) => {
    const downloadData = {
      ...doc,
      downloadTime: new Date().toISOString(),
      downloadedBy: userRole === "agent" ? "John Agent" : "Admin",
    };

    const blob = new Blob([JSON.stringify(downloadData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.name.replace(/\.[^/.]+$/, "")}_metadata.json`;
    a.click();
    URL.revokeObjectURL(url);

    // Update download count
    setDocuments(
      documents.map((d) =>
        d.id === doc.id ? { ...d, downloads: d.downloads + 1 } : d,
      ),
    );

    alert(`Downloading metadata for: ${doc.name}`);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this document?")) {
      setDocuments(documents.filter((d) => d.id !== id));
      setSelectedDocs(selectedDocs.filter((docId) => docId !== id));
    }
  };

  const handleShare = (doc) => {
    const recipients = prompt(
      "Enter email addresses to share with (comma separated):",
    );
    if (recipients) {
      const emails = recipients.split(",").map((email) => email.trim());
      setDocuments(
        documents.map((d) =>
          d.id === doc.id
            ? { ...d, sharedWith: [...doc.sharedWith, ...emails] }
            : d,
        ),
      );
      alert(`Shared with: ${emails.join(", ")}`);
    }
  };

  const toggleSelectDoc = (id) => {
    if (selectedDocs.includes(id)) {
      setSelectedDocs(selectedDocs.filter((docId) => docId !== id));
    } else {
      setSelectedDocs([...selectedDocs, id]);
    }
  };

  const handleBulkDownload = () => {
    if (selectedDocs.length === 0) {
      alert("Please select documents to download");
      return;
    }

    const selectedDocuments = documents.filter((d) =>
      selectedDocs.includes(d.id),
    );
    const bulkData = {
      downloadTime: new Date().toISOString(),
      downloadedBy: userRole === "agent" ? "John Agent" : "Admin",
      documents: selectedDocuments,
    };

    const blob = new Blob([JSON.stringify(bulkData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bulk_download_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    alert(`Downloaded ${selectedDocs.length} documents as JSON`);
  };

  const getStatusBadge = (status) => {
    const config = {
      signed: {
        color: "bg-green-100 text-green-700",
        icon: <CheckCircle size={12} />,
      },
      pending: {
        color: "bg-yellow-100 text-yellow-700",
        icon: <Clock size={12} />,
      },
      approved: {
        color: "bg-blue-100 text-blue-700",
        icon: <CheckCircle size={12} />,
      },
      processed: {
        color: "bg-purple-100 text-purple-700",
        icon: <CheckCircle size={12} />,
      },
      published: {
        color: "bg-indigo-100 text-indigo-700",
        icon: <CheckCircle size={12} />,
      },
      draft: { color: "bg-gray-100 text-gray-700", icon: <Edit size={12} /> },
      uploaded: {
        color: "bg-cyan-100 text-cyan-700",
        icon: <Upload size={12} />,
      },
    };

    const cfg = config[status] || {
      color: "bg-gray-100 text-gray-700",
      icon: <File size={12} />,
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${cfg.color}`}
      >
        {cfg.icon}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getFileIcon = (type) => {
    const icons = {
      pdf: <FileText className="text-red-500" size={20} />,
      doc: <FileText className="text-blue-500" size={20} />,
      docx: <FileText className="text-blue-500" size={20} />,
      xlsx: <FileText className="text-green-500" size={20} />,
      zip: <Folder className="text-purple-500" size={20} />,
      default: <FileText className="text-gray-500" size={20} />,
    };
    return icons[type] || icons.default;
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <FileText className="text-blue-600" size={20} />
              Document Manager
            </h3>
            <p className="text-sm text-gray-500">
              Shared documents across all dashboards
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg text-sm w-64"
              />
            </div>
            <button
              onClick={handleUpload}
              disabled={isUploading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 disabled:opacity-50"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <Upload size={16} />
                  Upload
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                selectedCategory === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedDocs.length > 0 && (
        <div className="p-3 bg-blue-50 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Paperclip className="text-blue-600" size={16} />
              <span className="font-medium">
                {selectedDocs.length} document
                {selectedDocs.length > 1 ? "s" : ""} selected
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleBulkDownload}
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded"
              >
                <Download size={14} className="inline mr-1" />
                Download Selected
              </button>
              <button
                onClick={() => setSelectedDocs([])}
                className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Documents Grid */}
      <div className="p-4">
        {filteredDocs.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="mx-auto text-gray-300 mb-3" size={48} />
            <p className="text-gray-500">No documents found</p>
            <p className="text-sm text-gray-400 mt-1">
              Try a different search or upload new documents
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
                  selectedDocs.includes(doc.id)
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getFileIcon(doc.type)}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-1">
                        {doc.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {doc.size} • {doc.type.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedDocs.includes(doc.id)}
                    onChange={() => toggleSelectDoc(doc.id)}
                    className="w-4 h-4 rounded"
                  />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{doc.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    {getStatusBadge(doc.status)}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Downloads:</span>
                    <span className="font-medium">{doc.downloads}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Uploaded:</span>
                    <span className="font-medium">{doc.uploadDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t">
                  <button
                    onClick={() => handleDownload(doc)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded text-sm font-medium hover:bg-blue-700"
                  >
                    <Download size={14} className="inline mr-1" />
                    Download
                  </button>
                  <button
                    onClick={() => handleShare(doc)}
                    className="flex-1 bg-green-600 text-white py-2 rounded text-sm font-medium hover:bg-green-700"
                  >
                    <Share2 size={14} className="inline mr-1" />
                    Share
                  </button>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Statistics Footer */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FolderOpen size={16} />
              <span>{documents.length} total documents</span>
            </div>
            <div className="flex items-center gap-2">
              <Download size={16} />
              <span>
                {documents.reduce((sum, doc) => sum + doc.downloads, 0)} total
                downloads
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>
                {new Set(documents.map((d) => d.uploadedBy)).size} contributors
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              const allData = {
                exportTime: new Date().toISOString(),
                documents: documents,
                statistics: {
                  totalDocuments: documents.length,
                  totalDownloads: documents.reduce(
                    (sum, doc) => sum + doc.downloads,
                    0,
                  ),
                  categories: categories.reduce(
                    (obj, cat) => ({ ...obj, [cat.name]: cat.count }),
                    {},
                  ),
                },
              };

              const blob = new Blob([JSON.stringify(allData, null, 2)], {
                type: "application/json",
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `all_documents_${new Date().toISOString().split("T")[0]}.json`;
              a.click();
              URL.revokeObjectURL(url);

              alert("All document data exported!");
            }}
            className="text-blue-600 font-medium flex items-center gap-1"
          >
            <ExternalLink size={14} />
            Export All Data
          </button>
        </div>
      </div>
    </div>
  );
}
