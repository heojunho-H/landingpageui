import { useEffect, useRef } from 'react';

export function ProblemSolution() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((r) => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-[5vw]" id="about">
      <div className="reveal">
        <div className="text-[0.78rem] font-bold tracking-[2px] uppercase text-[var(--accent)] mb-3">
          왜 Dangol CRM인가요?
        </div>
        <div className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-[-1px] text-[var(--ink)] leading-[1.2] mb-4">
          기존 CRM의 한계를<br />정면으로 해결합니다
        </div>
        <p className="text-base text-[var(--ink-soft)] max-w-[560px]">
          수백 개의 기능 중 실제로 사용하는 건 몇 개뿐. 무거운 도구에 지치셨나요? Dangol CRM은 다릅니다.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-16 reveal">
        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2.5">
            기존 CRM의 문제점
            <span className="text-[0.72rem] font-bold px-2.5 py-1 rounded-full tracking-wide bg-red-100 text-red-600">
              PROBLEM
            </span>
          </h3>
          <ul className="list-none flex flex-col gap-3.5">
            <li className="flex items-start gap-3 bg-[var(--bg)] rounded-xl p-3.5 text-sm text-[var(--ink-soft)] border border-[var(--border)]">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 bg-red-100">
                ❌
              </div>
              <div>
                <strong>복잡한 초기 설정</strong> — 도입까지 수 주, 별도 컨설팅 비용이 필요합니다.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-[var(--bg)] rounded-xl p-3.5 text-sm text-[var(--ink-soft)] border border-[var(--border)]">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 bg-red-100">
                ❌
              </div>
              <div>
                <strong>불필요한 기능 과부하</strong> — 우리 업무와 상관없는 기능이 화면을 가득 채웁니다.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-[var(--bg)] rounded-xl p-3.5 text-sm text-[var(--ink-soft)] border border-[var(--border)]">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 bg-red-100">
                ❌
              </div>
              <div>
                <strong>경직된 데이터 구조</strong> — 우리 회사 방식대로 항목을 바꾸기 어렵습니다.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-[var(--bg)] rounded-xl p-3.5 text-sm text-[var(--ink-soft)] border border-[var(--border)]">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 bg-red-100">
                ❌
              </div>
              <div>
                <strong>과도한 비용</strong> — 기업 규모에 관계없이 높은 구독료를 강요합니다.
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2.5">
            Dangol CRM의 해결 방식
            <span className="text-[0.72rem] font-bold px-2.5 py-1 rounded-full tracking-wide bg-[var(--teal-light)] text-[var(--teal)]">
              SOLUTION
            </span>
          </h3>
          <ul className="list-none flex flex-col gap-3.5">
            <li className="flex items-start gap-3 bg-[var(--bg)] rounded-xl p-3.5 text-sm text-[var(--ink-soft)] border border-[var(--teal-light)]">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 bg-[var(--teal-light)]">
                ✅
              </div>
              <div>
                <strong>3분 이내 시작</strong> — 가입 즉시 템플릿을 선택하고 바로 업무에 투입됩니다.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-[var(--bg)] rounded-xl p-3.5 text-sm text-[var(--ink-soft)] border border-[var(--teal-light)]">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 bg-[var(--teal-light)]">
                ✅
              </div>
              <div>
                <strong>필요한 것만 표시</strong> — 우리 팀에 맞는 항목과 뷰만 선택해 구성합니다.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-[var(--bg)] rounded-xl p-3.5 text-sm text-[var(--ink-soft)] border border-[var(--teal-light)]">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 bg-[var(--teal-light)]">
                ✅
              </div>
              <div>
                <strong>자유로운 데이터 설계</strong> — 코드 없이 필드와 파이프라인을 자유롭게 설계합니다.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-[var(--bg)] rounded-xl p-3.5 text-sm text-[var(--ink-soft)] border border-[var(--teal-light)]">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 bg-[var(--teal-light)]">
                ✅
              </div>
              <div>
                <strong>합리적인 구조의 요금</strong> — 팀 규모와 사용량에 따라 유연하게 선택합니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}