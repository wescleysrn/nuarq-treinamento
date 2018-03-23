$(function() {

    Morris.Line({
        element: 'morris_line_chart',
            data: [
                { ano: '2010', value: 5 },
                { ano: '2011', value: 11 },
                { ano: '2012', value: 5 },
                { ano: '2013', value: 7 },
                { ano: '2014', value: 10 },
                { ano: '2015', value: 8 },
                { ano: '2016', value: 15 },
                { ano: '2017', value: 26 },
            ],
        xkey: 'ano',
        ykeys: ['value'],
        resize: true,
        lineWidth:4,
        labels: ['Valor'],
        lineColors: ['#3498db'],
        pointSize:5,
    });

    Morris.Bar({
        element: 'morris_bar_chart',
        data: [{ y: '2012', a: 60, b: 50 },
            { y: '2013', a: 45, b: 29 },
            { y: '2014', a: 80, b: 48 },
            { y: '2015', a: 58, b: 40 },
            { y: '2016', a: 74, b: 19 },
            { y: '2017', a: 59, b: 31 },
            { y: '2018', a: 40, b: 75 } ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Equipe Java', 'Equipe PHP'],
        hideHover: 'auto',
        resize: true,
        barColors: ['#2ecc71', '#c7cccf'],
    });

    Morris.Area({
        element: 'morris_area_chart',
        data: [{ period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647 },
            { period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441 },
            { period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501 },
            { period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689 },
            { period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293 },
            { period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881 },
            { period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588 },
            { period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175 },
            { period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028 },
            { period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791 } ],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        lineColors: ['#91dbf2', '#65cded','#23B7E5'],
        lineWidth:2,
        pointSize:1,
    });

    Morris.Donut({
        element: 'morris_donut_chart',
        data: [
          {label: 'Java', value: 25 },
          {label: 'Angular', value: 40 },
          {label: 'PHP', value: 25 },
          {label: 'Delphi', value: 10 }
        ],
        formatter: function (y) { return y + "%" }
    });

    Morris.Line({
        element: 'morris_line_chart_2',
        data: [{ y: '2012', a: 100, b: 90 },
            { y: '2013', a: 75, b: 65 },
            { y: '2014', a: 50, b: 40 },
            { y: '2015', a: 75, b: 65 },
            { y: '2016', a: 50, b: 40 },
            { y: '2017', a: 75, b: 65 },
            { y: '2018', a: 100, b: 90 } ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Equipe Java', 'Equipe PHP'],
        hideHover: 'auto',
        resize: true,
        lineColors: ['#52a7e0','#3498db'],
    });

});
