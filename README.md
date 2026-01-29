# ChoderaLab's website

Welcome to the main code repository for the ChoderaLab website. 

The idea is that members of the lab are able to see how it is made and contribute
changes to it in a very open way, just like we enjoy doing science in the open.

## Contributing

Contributions to ChoderaLab website are very welcome! We try to put some guidelines and instructions
on how to do it in the following subsections

### How to add a new member

To add a new member to the group website, please follow these steps:

1.  **Create a new branch**: Checkout the `main` branch and create a new branch for your changes (e.g., `git checkout -b add-member-name`).
2.  **Create a new YAML file**: Navigate to `_data/members/`. Create a new file named `Firstname Lastname.yaml` (replace with your actual name).
3.  **Use a template**: You can copy the content from `_data/members/Templates/Grad Student.YAML` or `_data/members/Templates/Post Doc.YAML` depending on your position. Alternatively, you can use an existing member's file (e.g., `_data/members/Alexander Matthew Payne.yaml`) as a reference.
4.  **Fill in your details**: Edit the YAML file with your information. Key fields include:
    *   `name`: Your full name.
    *   `position`: Your current role (e.g., Graduate Student, Postdoctoral Research Scholar).
    *   `status`: Set to `current` for active members.
    *   `key dates`: Start date is required.
    *   `email`: Your contact email.
    *   `ORCID`: Your ORCID iD.
    *   `affiliations`: List your affiliations.
5.  **Submit a Pull Request**: Commit your new file, push the branch to the repository, and open a Pull Request against the `main` branch.

If you would like to improve documentation or fix a minor inconsistency or bug, please feel free to send a PR directly to `main`. For more complex issues/bugs or feature requests, please open an issue using the appropriate template.

### Maintainers

All active members of the ChoderaLab are expected to be maintainers and they are responsible of
keeping the website up to date, especially the parts that are directly related to the individual.

## License

The theme is available as open source under the terms of the [MIT License](https://github.com/alshedivat/al-folio/blob/main/LICENSE).

Originally, **al-folio** was based on the [\*folio theme](https://github.com/bogoli/-folio) (published by [Lia Bogoev](https://liabogoev.com) and under the MIT license). Since then, it got a full re-write of the styles and many additional cool features.
