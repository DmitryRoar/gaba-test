const THEME_SCRIPT = `(function(){try{
  var s=localStorage.getItem('theme');
  var t=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  document.documentElement.dataset.theme=t;
}catch(_){}})();`;

export const ThemeScript = () => <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
