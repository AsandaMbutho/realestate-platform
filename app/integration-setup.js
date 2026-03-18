// integration-setup.js
"use client";

import React from "react";
import { RealEstateConnector } from "./shared-state/RealEstateConnector";
import { DashboardIntegrator } from "./components/DashboardIntegrator";
import { CommunicationPanel } from "./components/CommunicationPanel";
import { LiveTracking } from "./components/LiveTracking";
import { DocumentManager } from "./components/DocumentManager";

// Initialize connector globally
if (typeof window !== "undefined") {
  window.RealEstateConnector = RealEstateConnector;
  window.connectorInstance = RealEstateConnector.getInstance();
}

export function setupDashboardIntegration(dashboardType) {
  // Add to Agent Dashboard (add to your AgentDashboard component):
  // 1. Import: import { DashboardIntegrator, CommunicationPanel, LiveTracking } from './integration'
  // 2. Add to render: <DashboardIntegrator dashboardType="agent" />
  // 3. Add live tracking tab: <LiveTracking agentId="john_agent" />

  // Add to Manager Dashboard:
  // 1. Import: import { DashboardIntegrator, CommunicationPanel, DocumentManager } from './integration'
  // 2. Add to render: <DashboardIntegrator dashboardType="manager" />
  // 3. Add communications tab: <CommunicationPanel userType="manager" showFull={true} />

  // Add to Admin Dashboard:
  // 1. Import: import { DashboardIntegrator, CommunicationPanel, DocumentManager } from './integration'
  // 2. Add to render: <DashboardIntegrator dashboardType="admin" />
  // 3. Add document manager: <DocumentManager userRole="admin" />

  return {
    connector: RealEstateConnector.getInstance(),
    DashboardIntegrator,
    CommunicationPanel,
    LiveTracking,
    DocumentManager,
  };
}

// Quick integration function
export function integrateWithAgentDashboard() {
  // Place this in your AgentDashboard component
  return `
    // Add to imports:
    import { DashboardIntegrator, CommunicationPanel, LiveTracking } from './integration';
    
    // Add to your component:
    <div className="mb-6">
      <DashboardIntegrator dashboardType="agent" />
    </div>
    
    // In your location tab:
    <LiveTracking agentId="john_agent" showHistory={true} />
    
    // In your messages tab:
    <CommunicationPanel userType="agent" showFull={true} />
  `;
}

export function integrateWithManagerDashboard() {
  return `
    // Add to imports:
    import { DashboardIntegrator, CommunicationPanel, DocumentManager } from './integration';
    
    // Add to your component:
    <div className="mb-6">
      <DashboardIntegrator dashboardType="manager" />
    </div>
    
    // Create new tab or add to existing:
    <CommunicationPanel userType="manager" showFull={true} />
    <DocumentManager userRole="manager" />
  `;
}

export function integrateWithAdminDashboard() {
  return `
    // Add to imports:
    import { DashboardIntegrator, CommunicationPanel, DocumentManager } from './integration';
    
    // Add to your component:
    <div className="mb-6">
      <DashboardIntegrator dashboardType="admin" />
    </div>
    
    // Add filing system enhancement:
    <DocumentManager userRole="admin" />
    
    // Add communications panel:
    <CommunicationPanel userType="admin" showFull={true} />
  `;
}

// Export everything
export default {
  RealEstateConnector,
  DashboardIntegrator,
  CommunicationPanel,
  LiveTracking,
  DocumentManager,
  setupDashboardIntegration,
  integrateWithAgentDashboard,
  integrateWithManagerDashboard,
  integrateWithAdminDashboard,
};
