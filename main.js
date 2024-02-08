$(document).ready(function(){
    
  	$('.home-inner').addClass('animate');

    
 var arrLang = new Array();
    arrLang['en'] = new Array();
    arrLang['ar'] = new Array();

    // English content
    arrLang['en']['home'] = 'Home';
    arrLang['en']['services'] = 'Services';
    arrLang['en']['about'] = 'About';
    arrLang['en']['why'] = 'Why Us';
    arrLang['en']['contact'] = 'Contact';
    
    arrLang['en']['name'] = 'Thiqa Contracting Company';
    arrLang['en']['trust'] = 'The Absolute Trust';
    arrLang['en']['start'] = 'Get Started';

    arrLang['en']['our'] = 'Our Services';
    arrLang['en']['mainteinance'] = 'Maintenance';
    arrLang['en']['residental'] = 'Residental Service';
    arrLang['en']['commercial'] = 'Commercial Service';
    arrLang['en']['main-pra'] = 'We provides an extensive range of maintenance services to industrial sites and facilities. We take a whole-of-life approach to asset management and maintenance,with the objective of achieving meaningful outcomes for our customers.';
    arrLang['en']['comm-pra'] = 'We understand how important your business is and that you want to provide your employees and customers with a safe and comfortable environment.We will work hard to get the task done right and to work in a way that won’t disrupt your daily operations costing you lost time or revenue.';
    arrLang['en']['res-pra'] = 'Together, we create communities that residents are proud to call home. We deliver tailored services to meet your needs, as well as value-added services and genuinely helpful service that make a difference, every day, for every resident and community we serve.';

    arrLang['en']['dream'] = 'Lets Build Your Dream Together';
    arrLang['en']['dream-pra'] = 'If you want a team that you can trust, Thiqa Commercial Services is ready to meet your needs at any time we’ve been in business since 1972 so you know that you are in good reliable hands.Every member of our team has a passion for being the best at what we do, and together, we create a great communities .Every day, our 10,000 employees come to work with one focus our customers’ missions We bring an unwavering commitment to help our customers succeed, and it’s that sense of purpose and opportunity to make a difference in the world that drives us every day.';
    
    arrLang['en']['project'] = 'Project Completed';
    arrLang['en']['total'] = 'Total Employees';
    arrLang['en']['client'] = 'Happy Client';

    arrLang['en']['expert'] = 'Expert And Proffessinals';
    arrLang['en']['quality'] = 'High Quality';
    arrLang['en']['customer'] = 'Customer Satisfaction';
    
    arrLang['en']['expert-pra'] = 'Our employee are proffesionals and Experts on theri job. Their main focus is The customer satsifaction.';
    arrLang['en']['quality-pra'] = 'Trust is our main goal,to insure our employee apply high quality standard measurements .';      
    arrLang['en']['customer-pra'] = 'Customer first is our goal .';

    arrLang['en']['phrase-title'] = 'We Turn Your Vision Into Reality';
    arrLang['en']['phrase-pra'] = 'We Help Our Customers Achive Their Dreams';
    
    arrLang['en']['footer-phrase'] = 'To create a better every day life for the many people';
    arrLang['en']['footer-location'] = 'Our Location';
    arrLang['en']['footer-street'] = '100 street Dammam City';
    arrLang['en']['footer-contact'] = 'Contact Info';
    arrLang['en']['footer-num'] = '+966 564712596 ';
    arrLang['en']['footer-name'] = 'Thiqa';






    
    

    // arabic  content (Cambodian Language) 
    arrLang['ar']['home'] = 'الرئيسية';
    arrLang['ar']['services'] = 'خدماتنا';
    arrLang['ar']['about'] = 'عن ثقة';
    arrLang['ar']['why'] = 'لماذا نحن';
    arrLang['ar']['contact'] = 'تواصل معنا';
    
    arrLang['ar']['name'] = 'شركة ثقة للمقاولات';
    arrLang['ar']['trust'] = 'قوة الثقة';
    arrLang['ar']['start'] ='ابدأ';
    
    arrLang['ar']['our'] = 'خدماتنا';
    arrLang['ar']['mainteinance'] = 'خدمات الصيانة';
    arrLang['ar']['residental'] = 'خدمات الاقامة والسكن';
    arrLang['ar']['commercial'] = 'خدمات تجارية';
    arrLang['ar']['main-pra'] = "نفدم خدمات متعددة لصيانة المنشات والمباني السكنية ,نعمل بفريق عمل متخصص وذو كفاءة عالية,نتكفل بجميع أعمال الصيانة  هدفنا الوحيد نتيجة مرضية للعملاء";
    arrLang['ar']['comm-pra'] = "نحن نفهم أهمية الأعمال التي تريدون ان تقدموها لعملاءكم . نعمل جاهدين لتنفيذ مهامكم بالشكل المطلوب وبدقة عالية";
    arrLang['ar']['res-pra'] = "نسعى في ثقة إلى تقديم الأفضل في كل وقت . نوفر عناء البحث وننتقي الأفضل ,نوفر الاراضي السكنية والتجارية والسياحية والصناعية بحسب رغبة المشتري. ";


    arrLang['ar']['dream'] = 'معا نبني المستقبل';
    arrLang['ar']['dream-pra'] = 'اذا كنت تبحث عن فريق غمل تثق فيه فان شركة ثقة تقدم كل ماتحتاجه بأدق التفاصيل , لدينا تاريخ طويل في سوق العمل منذ عام 1972 . كل عضو في شركتنا لديه الصبر والاصرار لتقديم أفضل مايمكن معا يمكننا أن نبني مجتمعا عظيما نفخر به.اليوم، و بعد عدة أعوام من العمل الدؤوب لدينا 10000 موظ  هدفهم تقديم خدمات بما يناسب عملائنا وبأعلى جودة . نسعى أن نضع بصمة إيجابية في العالم. ';
    
    arrLang['ar']['project'] = 'مشروع مكتمل';
    arrLang['ar']['total'] = 'موظف';
    arrLang['ar']['client'] = 'عميل';


    arrLang['ar']['expert'] = 'خبراء ومحترفون';
    arrLang['ar']['quality'] = 'جودة عالية';
    arrLang['ar']['customer'] = 'رضاء العملاء';

    arrLang['ar']['expert-pra'] ='نملك فريق عمل كامل من الخبراء والمحترفين , هدفهم تقديم خدمات ذات جودة عالية وترضي العملاء ';
    arrLang['ar']['quality-pra']='الثقة شعارنا لذلك نحرص على تطبيق معايير الجودة والسلامة لتقديم خدمات بمستوى عالي.'
    arrLang['ar']['customer-pra'] = 'رضا العملاءأولوية من أولويات تقديم الخدمات ,رضاكم هدفنا .';

    arrLang['ar']['phrase-title'] = 'نترجم أحلامكم على أرض الواقع';
    arrLang['ar']['phrase-pra'] = 'نساعد عملائنا لتحقيق أحلامهم ';
    
    arrLang['ar']['footer-phrase'] = 'لبناء مجتمع إيجابي متفائل';
    arrLang['ar']['footer-location'] = 'موقعنا';
    arrLang['ar']['footer-street'] = 'شارع الملك سعود الدمام';
    arrLang['ar']['footer-contact'] = 'معلومات الاتصال';
    arrLang['ar']['footer-num'] = '+966 564712596 ';
    arrLang['ar']['footer-name'] = 'ثقة';

     var lang;
    
    (function(window, $) {
      lang = window.navigator.language;
    if (lang == 'ar' ) {
        lang = 'ar';  
    }else{
        
      lang = 'en';  
 
    }
    })(window, jQuery);

    

    // Process translation
    $(function() {
      $('.translate').click(function() {
          lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        // $("p").css( "color", "red");
          if(lang == "ar"){
        $('html, body').css( "direction"," rtl" );
        $('.card-pra').css("font-size","18px");
        $('.card-pra').css("text-align","center");
        $('.dream-pra').css("text-align","center");  
        $('.dream-pra').css("font-size","19px"); 
        $('.footer-head').css("font-size","20px");      
        $('.start-btn').css("left","48%");



          }else{
         $('html, body').css( "direction"," ltr" );

          }

      });
    });
    
    
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    
    
});

 