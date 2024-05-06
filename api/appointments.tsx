import { databases } from "@/app/appwrite";
import { Query } from "appwrite";

export const getAppointments = async () => {
          try {
                    const response = await databases.listDocuments(
                              "65fea4d47b9045c92723",
                              "66348ae90017d1e29976",
                              [
                                  Query.orderDesc('date'),
                              ]
                          );
              return response.documents;
          } catch (error) {
              console.error('Error fetching Appointments:', error);
              return [];
          } 
      };