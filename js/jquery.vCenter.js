(function ($) {

    "use strict";

    $.vCenter = function (element, options) {

        var defaults = {
            target: '.vCenter'
        };

        var plugin = this;

        plugin.settings = {};

        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);

            var target = $(element).find(plugin.settings.target);

            $(window).on("load resize", function () {

                target.css('top', ($(element).height() - target.height()) / 2);

            });

        };

        plugin.init();

    };

    $.fn.vCenter = function (options) {
        return this.each(function () {

            if (undefined === $(this).data('vCenter')) {
                var plugin = new $.vCenter(this, options);
                $(this).data('vCenter', plugin);
            }
        });

    };

})(jQuery);
