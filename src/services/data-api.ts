import { GithubProjectListItemProps } from "../views/ProjectsPage/GithubProjectListItem";
import { useState, useEffect } from "react";

export type ISkill = {
  name: string;
  percent: number;
  category: string;
  subCategory?: string;
}

export type IProjectHighlight = {
  linkURL: string;
  projectName?: string;
  projectDescription?: string;
  imageURL?: string;
}

export type IResumeExperience = {
  company: {
    name: string
    logo: string
  }
  jobTitle: string
  location: string
  start: string
  end: string
  responsibilities: string[]
  seeMoreUrl?: string
}

export type IResume = {
  experience: IResumeExperience[]
  skills: ISkill[]
  projects: {
    highlights: IProjectHighlight[]
    github: GithubProjectListItemProps[]
  }
}


export async function fetchResume(): Promise<IResume> {
  const response = await fetch('/data/resume.json');
  const data = await response.json();
  return data;
}


export const useResume = () => {
  const [isLoading, setIsLoading] = useState(true)

  const [resume, setResume] = useState<IResume>({
    experience: [],
    skills: [],
    projects: {
      github: [],
      highlights: []
    }
  })

  useEffect(() => {
    fetchResume()
      .then((data) => setResume(data))
      .finally(() => setIsLoading(false))
  }, [])

  return [resume, {
    isLoading
  }] as const
}