import { databases } from "@/app/appwrite";

export const getPatients = async () => {
          try {
                    const response = await databases.listDocuments(
                              "65fea4d47b9045c92723",
                              "663343050009b88b486e"
                          );
              return response.documents;
          } catch (error) {
              console.error('Error fetching patients:', error);
              return [];
          } 
      };