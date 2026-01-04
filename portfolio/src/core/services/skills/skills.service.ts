import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  readonly #skills = [
    {
      section: "Programming",
      colorSection: "#FADADD",
      icon: "fa-solid fa-globe",
      skills: [
        { name: "Java", icon: "devicon-java-plain" },
        { name: "C#", icon: "devicon-csharp-plain" },
        { name: "C", icon: "devicon-c-original" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" }
      ]
    },
    {
      section: "Web Development",
      colorSection: "#FFEEDB",
      icon: "globe",
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3", icon: "devicon-css3-plain" },
        { name: "SASS", icon: "devicon-sass-original" },
        { name: "Angular", icon: "devicon-angular-plain" },
        { name: "React", icon: "devicon-react-original" }
      ]
    },
    {
      section: "Databases",
      colorSection: "#DAF7A6",
      icon: "database",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-original" },
        { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "Firebase", icon: "devicon-firebase-plain" }
      ]
    },
    {
      section: "Tools & Systems",
      colorSection: "#E0D3F5",
      icon: "tool",
      skills: [
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Linux", icon: "devicon-linux-plain" },
        { name: "Windows", icon: "devicon-windows11-original" },
        { name: "Raspberry Pi", icon: "devicon-raspberrypi-plain" },
        { name: "Bash", icon: "devicon-bash-plain" },
        { name: "Powershell", icon: "devicon-powershell-plain" },
        { name: "Unity Engine", icon: "devicon-unity-plain" },
        { name: "Docker", icon: "devicon-docker-plain" },

      ]
    }
  ];

  readonly #skillsSignal = signal<any>([])
  readonly skillsComp = computed<any>(() => this.#skillsSignal())
  constructor() {
    this.#skillsSignal.set(this.#skills)
  }
}
