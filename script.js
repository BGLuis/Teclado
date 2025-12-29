document.addEventListener('DOMContentLoaded', () => {
    const tecladoElement = document.getElementById('teclado');
    const btnClear = document.getElementById('btn-clear');
    const selectLayout = document.getElementById('select-layout');

    // --- HTML Templates ---

    const commonNavAndNum = `
        <!-- Nav Section -->
        <div class="section-nav">
            <div class="row-system">
                <div class="teclas" data-code="PrintScreen">Prt</div>
                <div class="teclas" data-code="ScrollLock">Scr</div>
                <div class="teclas" data-code="Pause">Pau</div>
            </div>
            
            <div class="nav-block">
                <div class="teclas" data-code="Insert">Ins</div>
                <div class="teclas" data-code="Home">Hm</div>
                <div class="teclas" data-code="PageUp">Pup</div>
                <div class="teclas" data-code="Delete">Del</div>
                <div class="teclas" data-code="End">End</div>
                <div class="teclas" data-code="PageDown">Pdn</div>
            </div>

            <div class="arrow-block">
                <div class="nav-placeholder"></div>
                <div class="teclas" data-code="ArrowUp">▲</div>
                <div class="nav-placeholder"></div>
                <div class="teclas" data-code="ArrowLeft">◄</div>
                <div class="teclas" data-code="ArrowDown">▼</div>
                <div class="teclas" data-code="ArrowRight">►</div>
            </div>
        </div>

        <!-- Numpad Section -->
        <div class="section-numpad">
            <div class="teclas" data-code="NumLock">Num</div>
            <div class="teclas" data-code="NumpadDivide">/</div>
            <div class="teclas" data-code="NumpadMultiply">*</div>
            <div class="teclas" data-code="NumpadSubtract">-</div>

            <div class="teclas" data-code="Numpad7">7</div>
            <div class="teclas" data-code="Numpad8">8</div>
            <div class="teclas" data-code="Numpad9">9</div>
            <div class="teclas span-2-row" style="grid-row: span 2; height: 100%;" data-code="NumpadAdd">+</div>

            <div class="teclas" data-code="Numpad4">4</div>
            <div class="teclas" data-code="Numpad5">5</div>
            <div class="teclas" data-code="Numpad6">6</div>
            <!-- + continues -->

            <div class="teclas" data-code="Numpad1">1</div>
            <div class="teclas" data-code="Numpad2">2</div>
            <div class="teclas" data-code="Numpad3">3</div>
            <div class="teclas span-2-row" style="grid-row: span 2; height: 100%;" data-code="NumpadEnter">Ent</div>

            <div class="teclas span-2" style="grid-column: span 2;" data-code="Numpad0">0</div>
            <div class="teclas" data-code="NumpadDecimal">,</div>
            <!-- Enter continues -->
        </div>
    `;

    const abnt2Main = `
        <!-- Main Section: Function + Alpha -->
        <div class="section-main">
            <!-- Function Row -->
             <div class="row-function">
                <div class="teclas" style="width: 40px;" data-code="Escape">Esc</div>
                <div class="gap-small" style="width: 40px;"></div>
                <div class="teclas" style="width: 40px;" data-code="F1">F1</div>
                <div class="teclas" style="width: 40px;" data-code="F2">F2</div>
                <div class="teclas" style="width: 40px;" data-code="F3">F3</div>
                <div class="teclas" style="width: 40px;" data-code="F4">F4</div>
                <div class="gap-small" style="width: 20px;"></div>
                <div class="teclas" style="width: 40px;" data-code="F5">F5</div>
                <div class="teclas" style="width: 40px;" data-code="F6">F6</div>
                <div class="teclas" style="width: 40px;" data-code="F7">F7</div>
                <div class="teclas" style="width: 40px;" data-code="F8">F8</div>
                <div class="gap-small" style="width: 20px;"></div>
                <div class="teclas" style="width: 40px;" data-code="F9">F9</div>
                <div class="teclas" style="width: 40px;" data-code="F10">F10</div>
                <div class="teclas" style="width: 40px;" data-code="F11">F11</div>
                <div class="teclas" style="width: 40px;" data-code="F12">F12</div>
             </div>

            <!-- Alphanumeric Block -->
            <div class="keyboard-grid">
                <!-- Row 1 -->
                <div class="teclas" data-code="Backquote">'</div>
                <div class="teclas" data-code="Digit1">1</div>
                <div class="teclas" data-code="Digit2">2</div>
                <div class="teclas" data-code="Digit3">3</div>
                <div class="teclas" data-code="Digit4">4</div>
                <div class="teclas" data-code="Digit5">5</div>
                <div class="teclas" data-code="Digit6">6</div>
                <div class="teclas" data-code="Digit7">7</div>
                <div class="teclas" data-code="Digit8">8</div>
                <div class="teclas" data-code="Digit9">9</div>
                <div class="teclas" data-code="Digit0">0</div>
                <div class="teclas" data-code="Minus">-</div>
                <div class="teclas" data-code="Equal">=</div>
                <div class="teclas span-3" data-code="Backspace">Backspace</div>

                <!-- Row 2 -->
                <div class="teclas span-2" data-code="Tab">Tab</div>
                <div class="teclas" data-code="KeyQ">q</div>
                <div class="teclas" data-code="KeyW">w</div>
                <div class="teclas" data-code="KeyE">e</div>
                <div class="teclas" data-code="KeyR">r</div>
                <div class="teclas" data-code="KeyT">t</div>
                <div class="teclas" data-code="KeyY">y</div>
                <div class="teclas" data-code="KeyU">u</div>
                <div class="teclas" data-code="KeyI">i</div>
                <div class="teclas" data-code="KeyO">o</div>
                <div class="teclas" data-code="KeyP">p</div>
                <div class="teclas" data-code="BracketLeft">
</div>
                <div class="teclas" data-code="BracketRight">{</div>
                <div class="teclas enter-iso" data-code="Enter">↵</div>

                <!-- Row 3 -->
                <div class="teclas span-2" data-code="CapsLock">Caps</div>
                <div class="teclas" data-code="KeyA">a</div>
                <div class="teclas" data-code="KeyS">s</div>
                <div class="teclas" data-code="KeyD">d</div>
                <div class="teclas" data-code="KeyF">f</div>
                <div class="teclas" data-code="KeyG">g</div>
                <div class="teclas" data-code="KeyH">h</div>
                <div class="teclas" data-code="KeyJ">j</div>
                <div class="teclas" data-code="KeyK">k</div>
                <div class="teclas" data-code="KeyL">l</div>
                <div class="teclas" data-code="Semicolon">ç</div>
                <div class="teclas" data-code="Quote">~</div>
                <div class="teclas" data-code="Backslash">}</div>
                <!-- Enter continues -->

                <!-- Row 4 -->
                <div class="teclas span-2" data-code="ShiftLeft">Shift</div>
                <div class="teclas" data-code="IntlBackslash">\</div>
                <div class="teclas" data-code="KeyZ">z</div>
                <div class="teclas" data-code="KeyX">x</div>
                <div class="teclas" data-code="KeyC">c</div>
                <div class="teclas" data-code="KeyV">v</div>
                <div class="teclas" data-code="KeyB">b</div>
                <div class="teclas" data-code="KeyN">n</div>
                <div class="teclas" data-code="KeyM">m</div>
                <div class="teclas" data-code="Comma">,</div>
                <div class="teclas" data-code="Period">.</div>
                <div class="teclas" data-code="Slash">;</div>
                <div class="teclas" data-code="IntlRo">/</div>
                <div class="teclas span-2" data-code="ShiftRight">Shift</div>

                <!-- Row 5 -->
                <div class="teclas span-2" data-code="ControlLeft">Ctrl</div>
                <div class="teclas span-2" data-code="MetaLeft">Win</div>
                <div class="teclas span-2" data-code="AltLeft">Alt</div>
                <div class="teclas span-space" data-code="Space"></div>
                <div class="teclas" data-code="AltRight">AltGr</div>
                <div class="teclas" data-code="MetaRight">Win</div>
                <div class="teclas" data-code="ContextMenu">Menu</div>
                <div class="teclas" data-code="ControlRight">Ctrl</div>
            </div>
        </div>
    `;

    const usMain = `
        <!-- Main Section: Function + Alpha (US ANSI) -->
        <div class="section-main">
             <div class="row-function">
                <div class="teclas" style="width: 40px;" data-code="Escape">Esc</div>
                <div class="gap-small" style="width: 40px;"></div>
                <div class="teclas" style="width: 40px;" data-code="F1">F1</div>
                <div class="teclas" style="width: 40px;" data-code="F2">F2</div>
                <div class="teclas" style="width: 40px;" data-code="F3">F3</div>
                <div class="teclas" style="width: 40px;" data-code="F4">F4</div>
                <div class="gap-small" style="width: 20px;"></div>
                <div class="teclas" style="width: 40px;" data-code="F5">F5</div>
                <div class="teclas" style="width: 40px;" data-code="F6">F6</div>
                <div class="teclas" style="width: 40px;" data-code="F7">F7</div>
                <div class="teclas" style="width: 40px;" data-code="F8">F8</div>
                <div class="gap-small" style="width: 20px;"></div>
                <div class="teclas" style="width: 40px;" data-code="F9">F9</div>
                <div class="teclas" style="width: 40px;" data-code="F10">F10</div>
                <div class="teclas" style="width: 40px;" data-code="F11">F11</div>
                <div class="teclas" style="width: 40px;" data-code="F12">F12</div>
             </div>

            <div class="keyboard-grid">
                <!-- Row 1 (16 cols) -->
                <div class="teclas" data-code="Backquote">~</div>
                <div class="teclas" data-code="Digit1">1</div>
                <div class="teclas" data-code="Digit2">2</div>
                <div class="teclas" data-code="Digit3">3</div>
                <div class="teclas" data-code="Digit4">4</div>
                <div class="teclas" data-code="Digit5">5</div>
                <div class="teclas" data-code="Digit6">6</div>
                <div class="teclas" data-code="Digit7">7</div>
                <div class="teclas" data-code="Digit8">8</div>
                <div class="teclas" data-code="Digit9">9</div>
                <div class="teclas" data-code="Digit0">0</div>
                <div class="teclas" data-code="Minus">-</div>
                <div class="teclas" data-code="Equal">=</div>
                <div class="teclas span-3" data-code="Backspace">Backspace</div>

                <!-- Row 2 (16 cols) -->
                <div class="teclas span-2" data-code="Tab">Tab</div>
                <div class="teclas" data-code="KeyQ">q</div>
                <div class="teclas" data-code="KeyW">w</div>
                <div class="teclas" data-code="KeyE">e</div>
                <div class="teclas" data-code="KeyR">r</div>
                <div class="teclas" data-code="KeyT">t</div>
                <div class="teclas" data-code="KeyY">y</div>
                <div class="teclas" data-code="KeyU">u</div>
                <div class="teclas" data-code="KeyI">i</div>
                <div class="teclas" data-code="KeyO">o</div>
                <div class="teclas" data-code="KeyP">p</div>
                <div class="teclas" data-code="BracketLeft">[</div>
                <div class="teclas" data-code="BracketRight">]</div>
                <div class="teclas span-2" data-code="Backslash">\</div>

                <!-- Row 3 (16 cols) -->
                <div class="teclas span-2" data-code="CapsLock">Caps</div>
                <div class="teclas" data-code="KeyA">a</div>
                <div class="teclas" data-code="KeyS">s</div>
                <div class="teclas" data-code="KeyD">d</div>
                <div class="teclas" data-code="KeyF">f</div>
                <div class="teclas" data-code="KeyG">g</div>
                <div class="teclas" data-code="KeyH">h</div>
                <div class="teclas" data-code="KeyJ">j</div>
                <div class="teclas" data-code="KeyK">k</div>
                <div class="teclas" data-code="KeyL">l</div>
                <div class="teclas" data-code="Semicolon">;</div>
                <div class="teclas" data-code="Quote">'</div>
                <div class="teclas span-3" style="grid-column: span 3;" data-code="Enter">Enter</div>

                <!-- Row 4 (16 cols) -->
                <div class="teclas span-3" style="grid-column: span 3;" data-code="ShiftLeft">Shift</div>
                <div class="teclas" data-code="KeyZ">z</div>
                <div class="teclas" data-code="KeyX">x</div>
                <div class="teclas" data-code="KeyC">c</div>
                <div class="teclas" data-code="KeyV">v</div>
                <div class="teclas" data-code="KeyB">b</div>
                <div class="teclas" data-code="KeyN">n</div>
                <div class="teclas" data-code="KeyM">m</div>
                <div class="teclas" data-code="Comma">,</div>
                <div class="teclas" data-code="Period">.</div>
                <div class="teclas" data-code="Slash">/</div>
                <div class="teclas span-3" style="grid-column: span 3;" data-code="ShiftRight">Shift</div>

                <!-- Row 5 (16 cols) -->
                <div class="teclas span-2" data-code="ControlLeft">Ctrl</div>
                <div class="teclas" data-code="MetaLeft">Win</div>
                <div class="teclas span-2" data-code="AltLeft">Alt</div>
                <div class="teclas span-space" style="grid-column: span 6;" data-code="Space"></div>
                <div class="teclas span-2" data-code="AltRight">Alt</div>
                <div class="teclas" data-code="MetaRight">Win</div>
                <div class="teclas" data-code="ContextMenu">Menu</div>
                <div class="teclas" data-code="ControlRight">Ctrl</div>
            </div>
        </div>
    `;

    // --- State ---
    let markedKeys = new Set(); 

    // --- Logic ---

    const renderKeyboard = (layoutType) => {
        let mainContent = '';
        if (layoutType === 'abnt2') {
            mainContent = abnt2Main;
        } else {
            mainContent = usMain;
        }
        
        tecladoElement.innerHTML = mainContent + commonNavAndNum;
        restoreMarks();
        attachMouseEvents();
    };

    const restoreMarks = () => {
        markedKeys.forEach(code => {
            const key = document.querySelector(`.teclas[data-code="${code}"]`);
            if (key) {
                key.classList.add('marked');
            }
        });
    };

    const clearMarks = () => {
        markedKeys.clear();
        document.querySelectorAll('.teclas.marked').forEach(el => el.classList.remove('marked'));
        document.querySelectorAll('.teclas.active').forEach(el => el.classList.remove('active'));
    };

    const attachMouseEvents = () => {
         const keys = document.querySelectorAll('.teclas');
         keys.forEach(key => {
            key.addEventListener('mousedown', () => {
                key.classList.add('active');
                key.classList.add('marked');
                const code = key.getAttribute('data-code');
                if(code) markedKeys.add(code);
            });
            key.addEventListener('mouseup', () => {
                key.classList.remove('active');
            });
            key.addEventListener('mouseleave', () => {
                key.classList.remove('active');
            });
        });
    };

    const getKeyElement = (code) => {
        return document.querySelector(`.teclas[data-code="${code}"]`);
    };

    // --- Event Listeners ---

    document.addEventListener('keydown', (event) => {
        const code = event.code;
        const keyElement = getKeyElement(code);
        
        if (keyElement) {
            keyElement.classList.add('active');
            keyElement.classList.add('marked');
            markedKeys.add(code);
            
            if(code === 'Tab' || code.startsWith('F')) {
                event.preventDefault();
            }
        }
    });

    document.addEventListener('keyup', (event) => {
        const code = event.code;
        const keyElement = getKeyElement(code);
        
        if (keyElement) {
            keyElement.classList.remove('active');
        }
    });

    btnClear.addEventListener('click', clearMarks);

    selectLayout.addEventListener('change', (e) => {
        renderKeyboard(e.target.value);
    });

    // --- Init ---
    renderKeyboard('abnt2');
});
