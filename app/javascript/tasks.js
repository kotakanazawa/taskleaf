document.addEventListener('turbolinks:load', () => {
  document.querySelectorAll('td').forEach((td) => {
    td.addEventListener('mouseover', (e) => {
      e.currentTarget.style.backgroundColor = '#eff';
    });

    td.addEventListener('mouseout', (e) => {
      e.currentTarget.style.backgroundColor = '';
    });
  });
});

// document.addEventListener('turbolinks:load', () => {
//   document.querySelectorAll('.delete').forEach((a) => {
//     a.addEventListener('ajax:success', () => {
//       var td = a.parentNode;
//       var tr = td.parentNode;
//       tr.style.display = 'none';
//     });
//   });
// });

// Turblinksが有効だと以下のコードは使えない
// window.onload = function() {
//   document.querySelectorAll('td').forEach(function(td) {
//     td.addEventListener('mouseover', function(e) {
//       e.currentTarget.style.backgroundColor = '#eff';
//     });

//     td.addEventListener('mouseout', function(e) { 
//       e.currentTarget.style.backgroundColor = '';
//     });
//   });
// };

