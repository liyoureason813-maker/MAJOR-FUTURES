(() => {
  'use strict';

  const config = window.MF_REGISTRATION_CONFIG || {};
  const storageKey = config.storageKey || 'major_futures_parent_access_v1';
  const gate = document.getElementById('registrationGate');
  const form = document.getElementById('parentRegistrationForm');
  const message = document.getElementById('registrationMessage');
  const submit = document.getElementById('registrationSubmit');
  const userMenu = document.getElementById('parentUserMenu');
  const userName = document.getElementById('parentUserName');
  const logout = document.getElementById('parentLogout');
  const privacyDialog = document.getElementById('privacyDialog');
  const privacyButton = document.getElementById('registrationPrivacyBtn');
  const privacyClose = document.getElementById('privacyClose');

  const readAccess = () => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  };

  const saveAccess = (record) => {
    try { localStorage.setItem(storageKey, JSON.stringify(record)); } catch (_) {}
  };

  const clearAccess = () => {
    try { localStorage.removeItem(storageKey); } catch (_) {}
  };

  const showMessage = (text, type = 'error') => {
    if (!message) return;
    message.textContent = text;
    message.dataset.type = type;
  };

  const setUnlocked = (record) => {
    document.documentElement.classList.add('parent-registered');
    document.body.classList.remove('registration-locked');
    gate?.setAttribute('aria-hidden', 'true');
    if (userMenu && userName && record) {
      userName.textContent = record.parentName || '家长用户';
      userMenu.hidden = false;
    }
  };

  const setLocked = () => {
    document.documentElement.classList.remove('parent-registered');
    document.body.classList.add('registration-locked');
    gate?.setAttribute('aria-hidden', 'false');
    if (userMenu) userMenu.hidden = true;
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const normalizePhone = (value) => value.replace(/[\s-]/g, '').replace(/^\+?86/, '');
  const validPhone = (value) => /^1[3-9]\d{9}$/.test(normalizePhone(value));
  const endpointReady = () => /^https:\/\/script\.google\.com\/.+\/exec(?:\?.*)?$/.test(config.endpoint || '');

  const current = readAccess();
  if (current) setUnlocked(current); else setLocked();

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    showMessage('');

    const data = new FormData(form);
    const parentName = String(data.get('parentName') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const relation = String(data.get('relation') || '').trim();
    const grade = String(data.get('grade') || '').trim();
    const consent = data.get('consent');

    if (!parentName || !phone || !relation || !grade) {
      showMessage('请先把带星号的登记信息填写完整。');
      return;
    }
    if (!validPhone(phone)) {
      showMessage('请检查手机号，当前版本按中国大陆11位手机号填写。');
      return;
    }
    if (!consent) {
      showMessage('请先勾选信息使用说明。');
      return;
    }
    if (!endpointReady()) {
      showMessage('网站管理者还没有连接 Google Sheet。请先按部署说明填写 registration-config.js。');
      return;
    }

    submit.disabled = true;
    submit.classList.add('loading');
    submit.querySelector('span').textContent = '正在登记…';

    const payload = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      if (key !== 'consent') payload.append(key, String(value));
    }
    payload.set('phone', normalizePhone(phone));
    payload.set('registeredAt', new Date().toISOString());
    payload.set('pageUrl', location.href);
    payload.set('siteVersion', config.siteVersion || '3.4');
    payload.set('language', document.documentElement.lang || 'zh-CN');
    payload.set('userAgent', navigator.userAgent);

    try {
      await fetch(config.endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: payload
      });

      const record = {
        parentName,
        phone: normalizePhone(phone),
        relation,
        grade,
        registeredAt: new Date().toISOString()
      };
      saveAccess(record);
      showMessage('登记完成，正在进入网站。', 'success');
      setTimeout(() => setUnlocked(record), 450);
    } catch (error) {
      console.error(error);
      showMessage('提交没有成功，请检查网络后再试一次。');
    } finally {
      submit.disabled = false;
      submit.classList.remove('loading');
      submit.querySelector('span').textContent = '登记并进入网站';
    }
  });

  logout?.addEventListener('click', () => {
    clearAccess();
    form?.reset();
    showMessage('');
    setLocked();
  });

  privacyButton?.addEventListener('click', () => privacyDialog?.showModal());
  privacyClose?.addEventListener('click', () => privacyDialog?.close());
  privacyDialog?.addEventListener('click', (event) => {
    if (event.target === privacyDialog) privacyDialog.close();
  });
})();
