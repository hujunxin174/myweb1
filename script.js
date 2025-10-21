// 测评数据
const questions = {
    male: [
        {
            title: "1. 经济能力",
            description: "请评估您的经济状况",
            options: [
                { text: "收入稳定，有房有车", score: 12.5 },
                { text: "收入良好，有房或有车", score: 10 },
                { text: "收入一般，有储蓄计划", score: 7.5 },
                { text: "收入较低，无稳定工作", score: 5 }
            ]
        },
        {
            title: "2. 情绪价值",
            description: "请评估您的情绪管理能力",
            options: [
                { text: "情绪稳定，善于沟通", score: 12.5 },
                { text: "多数时稳定，偶有脾气", score: 10 },
                { text: "情绪波动较大", score: 7.5 },
                { text: "脾气暴躁，难以沟通", score: 5 }
            ]
        },
        {
            title: "3. 生活技能",
            description: "您的生活自理能力如何？",
            options: [
                { text: "烹饪家务样样精通", score: 12.5 },
                { text: "基本生活技能具备", score: 10 },
                { text: "部分技能有待提升", score: 7.5 },
                { text: "生活自理能力较差", score: 5 }
            ]
        },
        {
            title: "4. 未来规划",
            description: "您对未来有清晰的规划吗？",
            options: [
                { text: "职业发展清晰，有明确目标", score: 12.5 },
                { text: "有规划但不够具体", score: 10 },
                { text: "规划模糊，随遇而安", score: 7.5 },
                { text: "没有规划，走一步看一步", score: 5 }
            ]
        },
        {
            title: "5. 家庭观念",
            description: "您的家庭观念如何？",
            options: [
                { text: "重视家庭，责任担当", score: 12.5 },
                { text: "有家庭观念但不够成熟", score: 10 },
                { text: "家庭观念淡薄", score: 7.5 },
                { text: "以自我为中心", score: 5 }
            ]
        },
        {
            title: "6. 社交能力",
            description: "您的社交能力如何？",
            options: [
                { text: "社交达人，人际关系和谐", score: 12.5 },
                { text: "社交正常，有固定朋友圈", score: 10 },
                { text: "社交圈较小", score: 7.5 },
                { text: "社交障碍，孤僻内向", score: 5 }
            ]
        },
        {
            title: "7. 兴趣爱好",
            description: "您的兴趣爱好情况？",
            options: [
                { text: "兴趣广泛，生活丰富", score: 12.5 },
                { text: "有固定爱好，生活充实", score: 10 },
                { text: "兴趣单一，略显乏味", score: 7.5 },
                { text: "无特别爱好，虚度时光", score: 5 }
            ]
        },
        {
            title: "8. 外在形象",
            description: "您对外在形象的注重程度？",
            options: [
                { text: "注重仪表，干净整洁", score: 12.5 },
                { text: "基本整洁，偶有疏忽", score: 10 },
                { text: "不太注重个人形象", score: 7.5 },
                { text: "形象邋遢，不修边幅", score: 5 }
            ]
        }
    ],
    female: [
        {
            title: "1. 独立能力",
            description: "您的独立能力如何？",
            options: [
                { text: "经济思想双独立", score: 12.5 },
                { text: "经济独立，思想依赖", score: 10 },
                { text: "有一定独立能力", score: 7.5 },
                { text: "依赖性强", score: 5 }
            ]
        },
        {
            title: "2. 情绪管理",
            description: "您的情绪管理能力？",
            options: [
                { text: "情商高，善解人意", score: 12.5 },
                { text: "情绪稳定，偶尔小脾气", score: 10 },
                { text: "情绪化较明显", score: 7.5 },
                { text: "情绪波动大，难以琢磨", score: 5 }
            ]
        },
        {
            title: "3. 生活情趣",
            description: "您的生活情趣如何？",
            options: [
                { text: "热爱生活，充满情趣", score: 12.5 },
                { text: "懂得生活，略有情调", score: 10 },
                { text: "生活平淡，缺乏新意", score: 7.5 },
                { text: "生活单调乏味", score: 5 }
            ]
        },
        {
            title: "4. 职业发展",
            description: "您的职业发展状况？",
            options: [
                { text: "事业有成或前景光明", score: 12.5 },
                { text: "工作稳定，有发展空间", score: 10 },
                { text: "工作一般，安于现状", score: 7.5 },
                { text: "无稳定工作或职业规划", score: 5 }
            ]
        },
        {
            title: "5. 家庭观念",
            description: "您的家庭观念如何？",
            options: [
                { text: "传统与现代完美结合", score: 12.5 },
                { text: "重视家庭但保持自我", score: 10 },
                { text: "家庭观念较重", score: 7.5 },
                { text: "过于自我或过于传统", score: 5 }
            ]
        },
        {
            title: "6. 社交智慧",
            description: "您的社交能力如何？",
            options: [
                { text: "社交高手，人脉广泛", score: 12.5 },
                { text: "社交正常，知心朋友多", score: 10 },
                { text: "社交圈较小但质量高", score: 7.5 },
                { text: "社交困难或过于活跃", score: 5 }
            ]
        },
        {
            title: "7. 内涵修养",
            description: "您的内涵修养程度？",
            options: [
                { text: "内外兼修，气质出众", score: 12.5 },
                { text: "有内涵，持续学习", score: 10 },
                { text: "内涵一般，有待提升", score: 7.5 },
                { text: "缺乏内涵，不思进取", score: 5 }
            ]
        },
        {
            title: "8. 外在魅力",
            description: "您的外在魅力如何？",
            options: [
                { text: "颜值气质俱佳", score: 12.5 },
                { text: "有魅力，会打扮", score: 10 },
                { text: "普通颜值，基本打扮", score: 7.5 },
                { text: "不注重外在形象", score: 5 }
            ]
        }
    ]
};

// 状态管理
let currentState = {
    gender: null,
    currentQuestionIndex: 0,
    scores: [],
    totalScore: 0
};

// DOM元素
const elements = {
    coverPage: document.getElementById('cover-page'),
    instructionPage: document.getElementById('instruction-page'),
    questionPage: document.getElementById('question-page'),
    resultPage: document.getElementById('result-page'),
    
    maleBtn: document.getElementById('male-btn'),
    femaleBtn: document.getElementById('female-btn'),
    startBtn: document.getElementById('start-btn'),
    nextBtn: document.getElementById('next-btn'),
    restartBtn: document.getElementById('restart-btn'),
    shareBtn: document.getElementById('share-btn'),
    
    instructionTitle: document.getElementById('instruction-title'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    questionTitle: document.getElementById('question-title'),
    questionDescription: document.getElementById('question-description'),
    optionsContainer: document.getElementById('options-container'),
    
    scoreDisplay: document.getElementById('score-display'),
    levelIcon: document.getElementById('level-icon'),
    levelTitle: document.getElementById('level-title'),
    levelDescription: document.getElementById('level-description'),
    dimensionsContainer: document.getElementById('dimensions-container')
};

// 音频控制功能
const audioElement = document.getElementById('cover-audio');
let audioControlButton = null;

// 初始化音频设置
function initAudio() {
    // 设置音频音量（0-1）
    audioElement.volume = 0.5;
    
    // 解决移动端自动播放限制
    document.addEventListener('click', function startAudioOnInteraction() {
        if (audioElement.paused) {
            audioElement.play().catch(e => {
                console.log('音频播放失败:', e);
            });
        }
        // 移除事件监听器，只执行一次
        document.removeEventListener('click', startAudioOnInteraction);
    });
}

// 播放背景音乐
function playBackgroundMusic() {
    audioElement.play().catch(error => {
        console.log('自动播放被阻止:', error);
    });
}

// 暂停背景音乐
function pauseBackgroundMusic() {
    audioElement.pause();
}

// 停止背景音乐
function stopBackgroundMusic() {
    audioElement.pause();
    audioElement.currentTime = 0;
}

// 添加音频控制按钮
function addAudioControlButton() {
    audioControlButton = document.createElement('button');
    audioControlButton.innerHTML = '🔊';
    audioControlButton.className = 'audio-control';
    audioControlButton.setAttribute('aria-label', '音乐控制');
    audioControlButton.setAttribute('title', '播放/暂停音乐');
    
    // 更新按钮状态
    function updateAudioButton() {
        audioControlButton.innerHTML = audioElement.paused ? '🔇' : '🔊';
    }
    
    audioControlButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play().then(() => {
                updateAudioButton();
            }).catch(e => {
                console.log('播放失败:', e);
            });
        } else {
            audioElement.pause();
            updateAudioButton();
        }
    });
    
    // 监听音频状态变化
    audioElement.addEventListener('play', updateAudioButton);
    audioElement.addEventListener('pause', updateAudioButton);
    
    document.body.appendChild(audioControlButton);
}

// 初始化事件监听
function initEventListeners() {
    elements.maleBtn.addEventListener('click', () => selectGender('male'));
    elements.femaleBtn.addEventListener('click', () => selectGender('female'));
    elements.startBtn.addEventListener('click', startTest);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.restartBtn.addEventListener('click', restartTest);
    elements.shareBtn.addEventListener('click', shareResult);
}

// 选择性别
function selectGender(gender) {
    currentState.gender = gender;
    elements.instructionTitle.textContent = `${gender === 'male' ? '男士' : '女士'}婚恋价值测评`;
    showPage('instruction-page');
}

// 开始测试
function startTest() {
    currentState.currentQuestionIndex = 0;
    currentState.scores = [];
    currentState.totalScore = 0;
    showQuestion();
}

// 显示问题
function showQuestion() {
    const questionsList = questions[currentState.gender];
    const question = questionsList[currentState.currentQuestionIndex];
    
    // 更新进度
    const progress = ((currentState.currentQuestionIndex) / questionsList.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `${currentState.currentQuestionIndex + 1}/${questionsList.length}`;
    
    // 更新问题内容
    elements.questionTitle.textContent = question.title;
    elements.questionDescription.textContent = question.description;
    
    // 生成选项
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option.text;
        optionBtn.dataset.score = option.score;
        optionBtn.addEventListener('click', () => selectOption(optionBtn, option.score));
        elements.optionsContainer.appendChild(optionBtn);
    });
    
    // 重置下一题按钮
    elements.nextBtn.disabled = true;
    
    showPage('question-page');
}

// 选择选项
function selectOption(optionBtn, score) {
    // 移除其他选项的选中状态
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 标记当前选中的选项
    optionBtn.classList.add('selected');
    
    // 启用下一题按钮
    elements.nextBtn.disabled = false;
    
    // 记录分数
    currentState.scores[currentState.currentQuestionIndex] = score;
}

// 下一题
function nextQuestion() {
    const questionsList = questions[currentState.gender];
    currentState.currentQuestionIndex++;
    
    if (currentState.currentQuestionIndex < questionsList.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 显示结果
function showResult() {
    // 计算总分
    currentState.totalScore = currentState.scores.reduce((sum, score) => sum + score, 0);
    
    // 判定等级
    let level, description, icon;
    if (currentState.totalScore >= 90) {
        level = "优质股";
        description = "恭喜你！你是婚恋市场的抢手货！各方面条件都很优秀，继续保持！";
        icon = "💎";
    } else if (currentState.totalScore >= 80) {
        level = "潜力股";
        description = "很有潜力！继续努力会更优秀！在某些方面还有提升空间。";
        icon = "🔥";
    } else if (currentState.totalScore >= 70) {
        level = "合格";
        description = "基本合格，还有提升空间哦~建议关注自己的薄弱环节。";
        icon = "✅";
    } else if (currentState.totalScore >= 60) {
        level = "待提升";
        description = "需要好好提升自己了！建议制定个人成长计划。";
        icon = "📈";
    } else {
        level = "寡王";
        description = "兄弟/姐妹，你要加油啊！全面提升自己才是王道。";
        icon = "🃏";
    }
    
    // 更新结果页面
    elements.scoreDisplay.textContent = `${Math.round(currentState.totalScore)}分`;
    elements.levelIcon.textContent = icon;
    elements.levelTitle.textContent = level;
    elements.levelDescription.textContent = description;
    
    // 生成维度分析
    generateDimensionAnalysis();
    
    showPage('result-page');
}

// 生成维度分析
function generateDimensionAnalysis() {
    elements.dimensionsContainer.innerHTML = '';
    const questionsList = questions[currentState.gender];
    
    questionsList.forEach((question, index) => {
        const dimensionItem = document.createElement('div');
        dimensionItem.className = 'dimension-item';
        
        const score = currentState.scores[index] || 0;
        
        dimensionItem.innerHTML = `
            <span class="dimension-name">${question.title.replace(/[0-9]\.\s/, '')}</span>
            <span class="dimension-score">${score}分</span>
        `;
        
        elements.dimensionsContainer.appendChild(dimensionItem);
    });
}

// 重新测试
function restartTest() {
    // 重置状态
    currentState.currentQuestionIndex = 0;
    currentState.scores = [];
    currentState.totalScore = 0;
    
    showPage('cover-page');
}

// 分享结果
function shareResult() {
    // 这里可以集成微信分享SDK或生成分享图片
    const shareText = `我在婚恋价值测评中获得了${Math.round(currentState.totalScore)}分，被评为${elements.levelTitle.textContent}！快来测测你的婚恋价值吧！`;
    
    if (navigator.share) {
        // 如果浏览器支持Web Share API
        navigator.share({
            title: '婚恋价值测评',
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('分享失败:', err);
            fallbackShare(shareText);
        });
    } else {
        // 备用方案
        fallbackShare(shareText);
    }
}

// 备用分享方案
function fallbackShare(shareText) {
    // 复制到剪贴板
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareText + ' ' + window.location.href).then(() => {
            alert('结果已复制到剪贴板，快去分享给好友吧！');
        }).catch(() => {
            // 如果复制失败，显示提示
            prompt('请手动复制以下内容分享给好友:', shareText + ' ' + window.location.href);
        });
    } else {
        // 老式方法
        prompt('请手动复制以下内容分享给好友:', shareText + ' ' + window.location.href);
    }
}

// 显示指定页面
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById(pageId).classList.add('active');
    
    // 音频控制逻辑
    if (pageId === 'cover-page') {
        playBackgroundMusic();
    } else if (pageId === 'question-page' || pageId === 'result-page') {
        // 可以在问题页和结果页降低音量
        audioElement.volume = 0.3;
    } else {
        audioElement.volume = 0.5;
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查音频元素是否存在
    if (audioElement) {
        initAudio();
        addAudioControlButton();
    }
    
    initEventListeners();
    
    // 窗口大小变化时调整布局
    window.addEventListener('resize', function() {
        // 可以在这里添加响应式调整代码
        console.log('窗口大小改变，当前宽度:', window.innerWidth);
    });
});

// 处理页面可见性变化（当用户切换标签页时）
document.addEventListener('visibilitychange', function() {
    if (document.hidden && audioElement) {
        // 页面不可见时暂停音乐
        audioElement.pause();
    }
});