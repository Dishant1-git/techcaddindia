 function switchTab(tab) {
      const beginnerBtn = document.querySelectorAll('.tab')[0];
      const advancedBtn = document.querySelectorAll('.tab')[1];

      const beginnerSidebar = document.getElementById('beginnerSidebar');
      const advancedSidebar = document.getElementById('advancedSidebar');

      beginnerBtn.classList.remove('active');
      advancedBtn.classList.remove('active');

      // Hide all content
      document.querySelectorAll('.module-content').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.module').forEach(el => el.classList.remove('active'));

      if (tab === 'beginner') {
        beginnerBtn.classList.add('active');
        beginnerSidebar.style.display = 'block';
        advancedSidebar.style.display = 'none';

        // Show first beginner module
        document.getElementById('b1').style.display = 'block';
        document.querySelector('[data-module="b1"]').classList.add('active');
      } else {
        advancedBtn.classList.add('active');
        beginnerSidebar.style.display = 'none';
        advancedSidebar.style.display = 'block';

        // Show first advanced module
        document.getElementById('a1').style.display = 'block';
        document.querySelector('[data-module="a1"]').classList.add('active');
      }
    }

    // Listen for module clicks
    document.addEventListener('click', function (e) {
      if (e.target.closest('.module')) {
        const moduleDiv = e.target.closest('.module');
        const moduleId = moduleDiv.getAttribute('data-module');

        // Hide all content and deactivate all modules
        document.querySelectorAll('.module-content').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.module').forEach(el => el.classList.remove('active'));

        // Show selected
        document.getElementById(moduleId).style.display = 'block';
        moduleDiv.classList.add('active');
      }
    });
