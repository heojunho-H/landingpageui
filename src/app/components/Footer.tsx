export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[#94a3b8] py-14 px-[5vw]">
      <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <h3 className="text-white text-xl font-extrabold mb-2.5">Dangol CRM</h3>
          <p className="text-[0.85rem] leading-relaxed max-w-[240px]">
            우리 회사에 꼭 맞는 CRM. 복잡함을 걷어내고, 영업에 집중할 수 있는 환경을 만들어 드립니다.
          </p>
        </div>
        <div>
          <h4 className="text-[#e2e8f0] text-[0.85rem] font-bold mb-4">제품</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                기능 소개
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                요금제
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                업데이트 로그
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                로드맵
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#e2e8f0] text-[0.85rem] font-bold mb-4">회사</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                회사 소개
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                채용
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                파트너십
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                문의하기
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#e2e8f0] text-[0.85rem] font-bold mb-4">지원</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                도움말 센터
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                API 문서
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-[#64748b] text-[0.85rem] transition-colors hover:text-white">
                이용약관
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8 pt-7 flex items-center justify-between text-xs text-[#475569] flex-wrap gap-3">
        <span>© Dangol CRM. All rights reserved.</span>
      </div>
    </footer>
  );
}