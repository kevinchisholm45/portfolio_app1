import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { Paragraph } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer} from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <Paragraph>{project.description}</Paragraph>
              
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
              
              <a href={project.repositoryUrl} target="_blank" rel="noreferrer noopener">
                  {"Github Link"}
              </a>
            
            </ProjectItem>
            
          ))}
          
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;