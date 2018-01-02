function loadTemplate(tmpl_name) {
    if ( !loadTemplate.tmpl_cache ) {
        loadTemplate.tmpl_cache = {};
    }

    if ( ! loadTemplate.tmpl_cache[tmpl_name] ) {
        var tmpl_dir = '/templates';
        var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';

        var tmpl_string;

        $.when($.ajax({
            url: tmpl_url,
            async: false
        }).success(function (ret) {
            tmpl_string = ret;
        }));

        loadTemplate.tmpl_cache[tmpl_name] = tmpl_string;
    }

    return loadTemplate.tmpl_cache[tmpl_name];
}

function renderTemplate(tmpl_name, data) {
    if ( !renderTemplate.tmpl_cache ) {
        renderTemplate.tmpl_cache = {};
    }

    if ( ! renderTemplate.tmpl_cache[tmpl_name] ) {
        var tmpl_dir = '/templates';
        var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';

        var tmpl_string;

        $.when($.ajax({
            url: tmpl_url,
            async: false
        }).success(function (ret) {
            tmpl_string = ret;
        }));

        renderTemplate.tmpl_cache[tmpl_name] = Handlebars.compile(tmpl_string)

    }

    return renderTemplate.tmpl_cache[tmpl_name](data);

}