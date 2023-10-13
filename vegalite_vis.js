var vg1 = "js/suicide_by_state.vg.json";
vegaEmbed("#map", vg1).then(function(result) {}).catch(console.error);

var vg2 = "js/suicide_deaths_state.vg.json";
vegaEmbed("#ranking_vis", vg2).then(function(result) {}).catch(console.error);

var vg3 = "js/suicide_by_sex_age.vg.json";
vegaEmbed("#sex_vis", vg3).then(function(result) {}).catch(console.error);

var vg4 = "js/Relationship_between_suicide.vg.json";
vegaEmbed("#relation_method", vg4).then(function(result) {}).catch(console.error);