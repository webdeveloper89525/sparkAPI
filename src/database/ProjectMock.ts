import { Project } from '../api/models/Project';

    const ProjectData = [
    {
        id: 1,
        name: 'aaa',
        expectedHours: 100,
        usedHours: 20,
    },
    {
        id: 2,
        name: 'bbb',
        expectedHours: 200,
        usedHours: 30,
    },
    {
        id: 3,
        name: 'ccc',
        expectedHours: 300,
        usedHours: 50,
    },
] as unknown as Project[];

export class ProjectMock {
    // simulate the database query execution and returns the mock data.
    public getAllProjects(query: string): Promise<Project[]> {
        return new Promise((resolve, rejects) => {
            if (ProjectData) {
                resolve(ProjectData);
            } else {
                resolve(undefined);
            }
        });
    }

    public getProject(query: string): Promise<Project> {
        return new Promise((resolve, rejects) => {
            if (ProjectData) {
                resolve(ProjectData[0]);
            } else {
                resolve(undefined);
            }
        });
    }
}

export const projectMockService = new ProjectMock();
