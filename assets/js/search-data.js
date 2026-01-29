// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-members",
          title: "members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order by year. Current members and alumni are linked to their member page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-software",
              title: "software",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/resources/software/";
              },
            },{id: "dropdown-instrumentation",
              title: "instrumentation",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/resources/instrumentation/";
              },
            },{id: "dropdown-data",
              title: "data",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/resources/data/";
              },
            },{id: "dropdown-3dparts",
              title: "3dparts",
              description: "3d parts",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/resources/3dparts/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "nav-funding",
          title: "funding",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/funding/";
          },
        },{id: "nav-disclosures",
          title: "disclosures",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/dislosures/";
          },
        },{id: "post-ml-foundry-ai-for-science-symposium",
        
          title: "ML Foundry AI for Science Symposium",
        
        description: "Poster at the AI4Science symposium hosted by ML Foundry",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ml_foundary_al_for_science_symposium/";
          
        },
      },{id: "post-ellis-ml4molecules-workshop-in-berlin",
        
          title: "ELLIS ML4Molecules Workshop in Berlin",
        
        description: "Presentation at the ELLIS ML4Molecules Workshop",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ellis_ml4molecules_workshop_in_berlin/";
          
        },
      },{id: "post-postdoctoral-fellow-maria-a-castellanos-wins-poster-prize-at-computational-medicinal-chemistry-school-for-alphafold-based-prediction-of-antiviral-spectrum",
        
          title: "Postdoctoral Fellow Maria A. Castellanos wins poster prize at Computational Medicinal Chemistry School...",
        
        description: "Maria A. Castellanos was awarded a poster prize at the Computational Medicinal Chemistry School",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/poster_prize_win/";
          
        },
      },{id: "post-icbs2024-international-chemical-biology-society-2025-keynote-in-toronto",
        
          title: "ICBS2024 International Chemical Biology Society 2025 keynote in Toronto",
        
        description: "ICBS2024 International Chemical Biology Society 2025 keynote in Toronto",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ICBS2024-_keynote/";
          
        },
      },{id: "post-2024-ncats-assay-guidance-manual-in-silico-drug-discovery-workshop",
        
          title: "2024 NCATS Assay Guidance Manual in silico drug discovery workshop",
        
        description: "2024 NCATS Assay Guidance Manual in silico drug discovery workshop",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/NCATS_assay_guidance_manual/";
          
        },
      },{id: "post-openeye-cup-xxiii-talk-ml-mm-repex-atm-fep-mbar-rbfes-and-you",
        
          title: "OpenEye CUP XXIII talk: ML/MM REPEX/ATM FEP/MBAR RBFEs and You",
        
        description: "OpenEye CUP XXIII talk: ML/MM REPEX/ATM FEP/MBAR RBFEs and You",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/openeye_cup_xxiii/";
          
        },
      },{id: "post-cadd-grc-2023-talk",
        
          title: "CADD GRC 2023 talk",
        
        description: "CADD GRC 2023 talk",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/CADD-GRC-talk/";
          
        },
      },{id: "post-celebrating-ten-years-at-mskcc",
        
          title: "Celebrating ten years at MSKCC",
        
        description: "Celebrating ten years at MSKCC",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Ten-Years-at-MSKCC/";
          
        },
      },{id: "post-barcelona-mmsml-talk-teaching-free-energy-calculations-to-learn",
        
          title: "Barcelona MMSML talk: Teaching free energy calculations to learn",
        
        description: "Barcelona MMSML talk: Teaching free energy calculations to learn",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/barcelona-mmsml-talk/";
          
        },
      },{id: "post-recomb-2022-talk-the-covid-moonshot-and-the-new-asap-avidd-center",
        
          title: "RECOMB 2022 talk: The COVID Moonshot and the new ASAP AViDD Center",
        
        description: "RECOMB 2022 talk: The COVID Moonshot and the new ASAP AViDD Center",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/RECOMB-talk/";
          
        },
      },{id: "post-nih-awards-initial-68m-for-ai-driven-structure-enabled-antiviral-platform-asap-for-open-science-discovery-of-oral-antivirals-for-pandemic-preparedness",
        
          title: "NIH awards initial $68M for AI-driven Structure-enabled Antiviral Platform (ASAP) for open science...",
        
        description: "NIH awards initial $68M for AI-driven Structure-enabled Antiviral Platform (ASAP) for open science discovery of oral antivirals for pandemic preparedness",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/NIH-ASAP-AWARD/";
          
        },
      },{id: "post-iclr-machine-learning-for-drug-discovery-mldd-workshop-talk-slides",
        
          title: "ICLR Machine Learning for Drug Discovery (MLDD) Workshop talk slides",
        
        description: "ICLR Machine Learning for Drug Discovery (MLDD) Workshop talk slides",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/ICLR-MLDD/";
          
        },
      },{id: "post-kate-holloway-award-symposium-talk",
        
          title: "Kate Holloway award symposium talk",
        
        description: "Kate Holloway award symposium talk",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/kate-holloway-talk/";
          
        },
      },{id: "post-openeye-cup-xxi-talk-a-moonshot-on-theory-and-practice",
        
          title: "OpenEye CUP XXI talk - A Moonshot on Theory and Practice",
        
        description: "OpenEye CUP XXI talk - A Moonshot on Theory and Practice",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/openeye-cup-xxi/";
          
        },
      },{id: "post-nih-bisti-talk-open-science-antiviral-discovery-with-the-covid-moonshot-and-the-open-source-drug-discovery-ecosystem",
        
          title: "NIH BISTI talk: Open science antiviral discovery with the covid moonshot 🌙 🚀...",
        
        description: "NIH BISTI talk: Open science antiviral discovery with the covid moonshot 🌙 🚀 and the open source drug discovery ecosystem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/NIH-bisti-talk/";
          
        },
      },{id: "post-university-of-toronto-talk-slides",
        
          title: "University of Toronto talk slides",
        
        description: "University of Toronto talk slides",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/U-toronto-talk/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
