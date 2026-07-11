export {};

declare global {
  interface Window {
    api: {
      app: string;
      version: string;

      ping(): Promise<any>;

      getLeads(): Promise<any[]>;

      createLead(lead: any): Promise<any>;

      dashboardSummary(): Promise<{
        totalLeads: number;
        totalEmail: number;
        totalWebsite: number;
        totalCity: number;
      }>;

      importCsv(rows: any[]): Promise<{
        success: number;
        failed: number;
        total: number;
      }>;

      startMaps(data: {
        keyword: string;
        location: string;
        limit: number;
      }): Promise<any>;

      stopMaps(): Promise<any>;

      exportExcel(): Promise<{
        success: boolean;
        file: string;
      }>;
    };
  }
}
