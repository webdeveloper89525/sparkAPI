import { EntityRepository, Repository } from 'typeorm';
import { Project } from '../models/Project';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {

    /**
     * Find One project by project_id
     */
    public findByProjectId(id: string): Promise<any> {
        return this.query(``);
    }

    /**
     * Get All Projects List
     */
    public findAllProjects(): Promise<any> {
        return this.query(``);
    }

    /**
     * Get Projects by search project name
     */
    public findByNameSearch(name: string): Promise<any> {
        return this.query(``);
    }

    /**
     * Create or Update the Project
     */
    public saveProject(project: Project): Promise<any> {
        return this.query(``);
    }

    /**
     * Delete Project
     */
    public deleteProject(id: string): Promise<any> {
        return this.query(``);
    }
}
