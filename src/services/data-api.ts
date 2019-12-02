import { ProjectHighlight } from "../views/AboutPage/ProjectHighlightCard";
import { GithubProjectListItemProps } from "../views/ProjectsPage/GithubProjectListItem";


/**
 * Fetches the project highlights
 *
 * @export
 * @returns {Promise<ProjectHighlight[]>}
 */
export async function fetchProjectHighlights(): Promise<ProjectHighlight[]> {
  const response = await fetch('/data/project_highlights.json');
  const data = await response.json();
  return data;
}

/**
 * Fetches the github projects
 *
 * @returns {Promise<GithubProjectListItemProps[]>}
 */
export async function fetchGithubProjects(): Promise<GithubProjectListItemProps[]> {
  const response = await fetch('/data/github_projects.json');
  const data = await response.json();
  return data;
}


export type ISkill = {
  name: string;
  percent: number;
  category: string;
  subCategory?: string;
}

export async function fetchSkills(): Promise<ISkill[]> {
  const response = await fetch('/data/skills.json');
  const data = await response.json();
  return data;
}