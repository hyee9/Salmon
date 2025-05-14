//마우스 호버, fixed이동
document.addEventListener("DOMContentLoaded", () => {
    
    const imgContents = document.querySelectorAll(".sc-quality .img-content");
    imgContents[0].classList.add("fixed");

    imgContents.forEach((content) => {
        content.addEventListener("mouseenter", () => {
            imgContents.forEach((item) => item.classList.remove("fixed"));
            content.classList.add("fixed");
        });
    });
    
});

    gsap.registerPlugin(ScrollTrigger);



    intro = gsap.timeline({

    })
    intro.to('.sc-main .img',1,{
        "clip-path":"inset(0%)",
        stagger:0.1,
    },'a')
    intro.to('.sc-main .img img',1,{
        scale:1,
        stagger:0.1,
    },'a')

    

    introScroll = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-main .sticky-wrapper",
            start:"0% 0%",
            end:"100% 100%",
            // markers:true,
            scrub:0,
        }
    })

    introScroll.to('.sc-main .img:nth-of-type(1)',{
        top: '100vh',
        left: '-40vw',
        opacity: 0
    },'a')
    introScroll.to('.sc-main .img:nth-of-type(2)',{
        top: '-50vh',
        left: '-40vw',
        opacity: 0,
    },'a')
    introScroll.to('.sc-main .img:nth-of-type(3)',{
        top: '-50vh',
        left: '-40vw',
        opacity: 0
    },'a')
    introScroll.to('.sc-main .img:nth-of-type(4)',{
        x: "50vh",  // right 방향으로 이동 (기본 위치 기준)
        y: "100vh",
        opacity: 0
    },'a')
    introScroll.to('.sc-main .img:nth-of-type(5)',{
        x: "50vh",  // right 방향으로 이동 (기본 위치 기준)
        y: "-100vh",
        opacity: 0 
    },'a')
    introScroll.to('.sc-main .img:nth-of-type(6)',{
        x: "40vh",  // right 방향으로 이동 (기본 위치 기준)
        y: "50vh" ,
        opacity: 0
    },'a')
    introScroll.to('.sc-main .img:nth-of-type(7)',{
        x: "40vh",  // right 방향으로 이동 (기본 위치 기준)
        y: "-140vh",
        opacity: 0 
    },'a')


    introScroll = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-main .info",
            start:"0% 80%",
            end:"100% 100%",
            // markers:true,
            scrub:0,
            onEnter:function(){
                $('.sc-main .info').addClass('effect')
            },
            onLeaveBack:function(){
                $('.sc-main .info').removeClass('effect')
            }
        }
    })

    introScroll = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-quality .info-line",
            start: "top 80%",
            end: "bottom 100%",
            // markers:true,
            scrub:0,
            onEnter:function(){
                $('.sc-quality .info-line').addClass('effect')
            },
            onLeaveBack:function(){
                $('.sc-quality .info-line').removeClass('effect')
            }
        }
    })


    gsap.timeline({
        scrollTrigger: {
          trigger: ".header-area .cols.cols03",
          start: "top top",
          end: "+=100",
          scrub: 1
        }
      })
      .to(".header-area .cols.cols03", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out"
      });



    gsap.timeline({
        scrollTrigger: {
            trigger: ".ms_txt", 
            start: "top top",  
            end: "+=5",      
            scrub: 1       
            // markers: true     
        }
    })
    .to(".ms_txt", { 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out"
    });

    gsap.fromTo(".sc-quality .title", { 
        scale: 0.5, 
        opacity: 0 },  // 처음 크기 작고 투명
        { 
            scale: 1, 
            opacity: 1, 
            duration: 1.5, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".sc-quality .title", // 🚀 `.title`이 화면에 나타날 때 실행
                start: "top 80%",  // 🚀 요소의 `top`이 뷰포트 80% 지점에 오면 실행
                once: true,  // 🚀 한 번만 실행 (스크롤 되돌려도 재실행되지 않음)
            }
        }
    );
    gsap.fromTo(".sc-quality .expertise-text", 
        { y: 30, opacity: 0 },  // 처음 아래에 위치 & 투명
        { 
            y: 0, 
            opacity: 1, 
            duration: 1.5, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".sc-quality .expertise-text", // 🚀 `.expertise-text`이 화면에 보이면 실행
                start: "top 85%",  // 🚀 요소의 `top`이 뷰포트 85%에 도달하면 시작
                once: true,  // 🚀 한 번만 실행 (스크롤 되돌려도 재실행되지 않음)
            }
        }
    );





// text-이동, 줄 라인 그림
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-help",
            start: "top center",
        }
    });
    
    timeline.to(".text-3", { opacity: 1,y: "0%",duration: 1,ease: "power2.out",});
    timeline.to(".text-1", { opacity: 1,y: "0%",duration: 1,ease: "power2.out",});
    timeline.to(".text-2", {opacity: 1,y: "0%",duration: 1,ease: "power2.out",}, "-=0.2");
    timeline.to(".right-line", {scaleX: 1,duration: 1,ease: "power2.out"}, "-=0.8");
      


let tlEighty = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-projects .container", 
        start: "top 20%", 
        endTrigger:".sc-projects .parallax_sections",
        end: "0% 0%", 
        scrub: true, 
        pin: true,
        pinSpacing:false,
        // markers:true,
    }
});
tlEighty
    .to(".eighty", { rotation:90, scale:30, }) 




asdas = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-projects .parallax_sections", 
        start: "top 0%", 
        end: "100% 100%", 
        scrub: true, 
        // markers:true,
    }
})

asdas.to('.ps1',{
    'clip-path': 'inset(0 0 100% 0)'
})
asdas.to('.ps2',{
    'clip-path': 'inset(0 0 100% 0)'
})


asdas.to('.sc-help .img-area img',{
    scrollTrigger: {
        trigger: ".sc-provides", 
        start: "0% 100%", 
        end: "0% 0%", 
        scrub: true, 
        // markers:true,
    },
    yPercent:20,
})




    //반복 텍스트
    if ($('.sw-banner').length) {

        roll(".sw-banner .banner-text", { duration: 25}); // 속도 조절
    
  
        function roll(targets, vars) {
            vars = vars || {};
            vars.ease || (vars.ease = "none");
            const tl = gsap.timeline({
                repeat: -1,
                onReverseComplete() {
                    this.totalTime(this.rawTime() + this.duration() * 10); // 역방향 
                }
            });
    
            const elements = gsap.utils.toArray(targets); 
            const clones = elements.map(el => {
                let clone = el.cloneNode(true); 
                el.parentNode.appendChild(clone); 
                return clone;
            });
    
            const positionClones = () => elements.forEach((el, i) => {
                gsap.set(clones[i], {
                    position: "absolute",
                    overwrite: false,
                    top: el.offsetTop,
                    left: el.offsetLeft + el.offsetWidth 
                });
            });
    
            positionClones();
    
            elements.forEach((el, i) => {
                tl.to([el, clones[i]], { xPercent: -100, ...vars }, 0); 
            });
    
            window.addEventListener("resize", () => {
                let time = tl.totalTime(); 
                tl.totalTime(0); 
                positionClones();
                tl.totalTime(time); 
            });
    
            return tl;
        }
    }
        // `dt_ovr` 축소 애니메이션


        $('.sw-text').each(function(i,el){
            let tlText = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: `0 50%`,
                    end: `100% 50%`, 
                    scrub: true
                    // markers:true,
                }
            });
            tlText.to($(this).find('.dt_ovr'),{
                scaleX:0,
                ease:'none'
            })
        })


    if ($('.sc-reliability').length) {

        const imgArray = ['-10vw', '-30vw', '-50vw'];
    
        gsap.utils.toArray('.sc-reliability .img-content .img-area').forEach((item, index) => {
            let tlCO = gsap.timeline({
                scrollTrigger: {
                    id: `tlCO-${index}`, 
                    trigger: item,
                    scrub: true,
                    start: `top bottom`,
                    end: `top top`,
                    // markers: true 
                }
            });

            tlCO.to(item, {
                y: imgArray[index], 
                ease: 'none' 
            });
        });
    };

    

// 가로 라인
    gsap.to(".line-horizontal", {
        width: "100%", 
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".sc-Advantages",
            start: "top center", 
            end: "top 100px",
            scrub: true,
        },
    });

    // 위에서 아래로 
    gsap.to(".line-vertical", {
        height: "100%", 
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".sc-Advantages",
            start: "top center",
            end: "top 100px",
            scrub: true,
        },
    });

    // Mouse drag interaction
    const container = document.querySelector(".sc-Advantages");
    const lineHorizontal = document.querySelector(".line-horizontal");
    const lineVertical = document.querySelector(".line-vertical");

    let isDragging = false;

    container.addEventListener("mousedown", () => (isDragging = true));
    container.addEventListener("mouseup", () => (isDragging = false));
    container.addEventListener("mousemove", (e) => {
        if (isDragging) {
            // 마우스 위치에 따라 선의 길이 조정
            const rect = container.getBoundingClientRect();
            const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
            const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

            lineHorizontal.style.width = `${xPercent}%`;
            lineVertical.style.height = `${yPercent}%`;
        }
    });


    // 이미지 움직임 
    if ($('.sc-solutions').length) {

        const imgArray = ['-10vw', '-22vw', '-30vw',  '-12vw', '0vw'];
    
        gsap.utils.toArray('.sc-solutions .img-area .row').forEach((item, index) => {
            let tlCO = gsap.timeline({
                scrollTrigger: {
                    id: `tlCO-${index}`, 
                    trigger: item,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top",
                    // markers: true 
                }
            });

            tlCO.to(item, {
                y: imgArray[index], 
                ease: 'none' 
            });
        });
    };

    const solutionstime = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-solutions",
            start: "top center",
            once: true,
        }
    });
    
    solutionstime.fromTo(
        ".sc-solutions .text-area", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" } 
    );
    
    const sendTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-send",
          start: "top center",
          toggleActions: "play none none none"
        }
      });
      
      sendTimeline.to(".sc-send .apl_ln_h span", {
        scaleX: 1,
        duration: 1,
        ease: "power2.out"
      });
      
      sendTimeline.to(".sc-send .apl_r_ln_h span", {
        scaleX: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.8");
      
      sendTimeline.to(".sc-send .apl_ln_v span", {
        scaleY: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.8");


      gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-link",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
      .to(".bg-img-parallax, .sc-link .rows", {
        y: "-30vw",
        ease: "none"
      });