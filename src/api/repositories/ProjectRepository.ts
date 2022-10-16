import { projectMockService } from '../../database/ProjectMock';
import { EntityRepository, Repository } from 'typeorm';
import { Project } from '../models/Project';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
    /**
     * Find One project by project_id
     */
    public findByProjectId(id: string): Promise<any> {
        const query = `SELECT * FROM project WHERE id = "${id}"`;
        const projects = projectMockService.getProject(query);
        return projects;
    }

    /**
     * Get All Projects List
     */
    public findAllProjects(): Promise<any | undefined> {
        const query = `SELECT * FROM project`;
        const projects = projectMockService.getAllProjects(query);
        return projects;
    }

    /**
     * Get Projects by search project name
     */
    public findByNameSearch(name: string): Promise<any> {
        const query = `SELECT * FROM project WHERE name = "${name}"`;
        const projects = projectMockService.getProject(query);
        return projects;
    }

    /**
     * Create or Update the Project
     */
    public saveProject(project: Project): Promise<any> {
        let query = ``;
        if (project.id) {
            query = `INSERT INTO project (name, expected_hours, used_hours)
                    VALUES ("${project.name}", ${project.expectedHours}, ${project.usedHours});`;
        } else {
            query = `UPDATE project
                    SET name = "${project.name}", expected_hours = expected_hours + ${project.expectedHours} used_hours = used_hours + ${project.usedHours}
                    WHERE id = ${project.id};`;
        }
        const projects = projectMockService.saveProject(query, project);
        return projects;
    }

    /**
     * Delete Project
     */
    public deleteProject(id: string): Promise<any> {
        const query = `DELETE * FROM project WHERE id = "${id}"`;
        return projectMockService.deleteProject(query);
    }
}
