---
layout: default
title: mEntulimu
author: guskant
date: 2017-12-15T12:44:00Z
---
## <span lang="en">What is "mEntulimu"?</span> <span lang="jbo">la'au mEntulimu li'u mo</span> <span lang="epo">Kio estas "mEntulimu"?</span> <span lang="fr">Qu'est « mEntulimu » ?</span> <span lang="zh-Hant">"mEntulimu"是什麼?</span> <span lang="zh-Hans">"mEntulimu"是什么?</span> <span lang="ja">「mEntulimu」とは？</span>

<div lang="en">"mEntulimu" is a series of short videos about Lojban language.</div>
<div lang="jbo">i la'au mEntulimu li'u porsi lo temto'u co skina be la lojban</div>
<div lang="epo">"mEntulimu" estas serio de mallongaj filmoj pri la loĵbana lingvo.</div>
<div lang="fr">« mEntulimu » est une serie de courts métrages sur la langue lojbanaise.</div>
<div lang="zh-Hant">"mEntumu"是關於邏輯語的短片系列。</div>
<div lang="zh-Hans">"mEntulimu"是关于逻辑语的短片系列。</div>
<div lang="ja">「mEntulimu」はロジバンについての短編動画シリーズです。</div>

## <span lang="en">Recent videos</span> <span lang="jbo">ni'o cnino skina</span> <span lang="epo">Freŝaj filmoj</span> <span lang="fr">Les dernières vidéos</span> <span lang="zh-Hant">最新視頻</span> <span lang="zh-Hans">最新视频</span> <span lang="ja">最新の動画</span>

  {% for page in site.skina limit:5 %}
- i [{{ page.title }}]({{ page.url }}) ({{ page.date | date: "%Y-%m-%d" }}) {% endfor %}

<span lang="en">There is</span> <!--
--><span lang="jbo">i</span> <!--
--><span lang="epo">Estas</span> <!--
--><span lang="fr">Il y a</span> <!--
--><span lang="zh-Hant">現在有</span> <!--
--><span lang="zh-Hans">现在有</span> <!--
--><span lang="ja">現在</span> <!--
-->{% assign counter = 1 %}{% for item in site.skina.posts %}{% unless item.published == false %}{% assign counter=counter | plus:1 %}{% endunless %}{% endfor %}{{ counter }}<!--
--><span lang="en">video in 6 languages.</span> <!--
--><span lang="jbo">da skina bau 6 de</span> <!--
--><span lang="epo">filmo en 6 lingvoj.</span> <!--
--><span lang="fr">vidéo dans 6 langues.</span> <!--
--><span lang="zh-Hant">個視頻使用6個語言講的.</span> <!--
--><span lang="zh-Hans">个视频使用6个语言讲的.</span> <!--
--><span lang="ja">件、6言語の動画があります。</span>

## <span lang="en">List of videos</span> <span lang="jbo">ni'o liste loi skina</span> <span lang="epo">Listo de filmoj</span> <span lang="fr">Liste de vidéos</span> <span lang="zh-Hant">視頻目錄</span> <span lang="zh-Hans">视频目录</span> <span lang="ja">動画のリスト</span>

- <span lang="en">Commentary on the book CLL (The Complete Lojban Language)</span> <!--
--><span lang="jbo">i pinka lo cukta no'u cylyly (to la'o zoi The Complete Lojban Language zoi toi)</span> <!--
--><span lang="epo">Komentoj pri la libro CLL (The Complete Lojban Language)</span> <!--
--><span lang="fr">Commentaires du livre CLL (The Complete Lojban Language, Le Précis de grammaire lojban)</span> <!--
--><span lang="zh-Hant">CLL (The Complete Lojban Language) 註釋</span> <!--
--><span lang="zh-Hans">CLL (The Complete Lojban Language) 注释</span> <!--
--><span lang="ja">CLL（The Complete Lojban Language, ロジバン大全）の注釈</span>
- <span lang="en">Elementary course</span> <!--
--><span lang="jbo">i skina co ctuca lo nintadni</span> <!--
--><span lang="epo">Elementa kurso</span> <!--
--><span lang="fr">Cours élémentaire</span> <!--
--><span lang="zh-Hant">初級講座</span> <!--
--><span lang="zh-Hans">初级讲座</span> <!--
--><span lang="ja">初級講座</span>
- <span lang="en">Intermediate course</span> <!--
--><span lang="jbo">i skina co ctuca lo ba'o nintadni</span> <!--
--><span lang="epo">Mezgrada kurso</span> <!--
--><span lang="fr">Cours moyen</span> <!--
--><span lang="zh-Hant">中級講座</span> <!--
--><span lang="zh-Hans">中级讲座</span> <!--
--><span lang="ja">中級講座</span>
- <span lang="en">Proposals about the design of future Lojban language</span> <!--
--><span lang="jbo">i selti'i fi'o te tavla lo se platu be fi lo ba lojbo bangu</span> <!--
--><span lang="epo">Proponoj pri plano de la estonta loĵbana lingvo</span> <!--
--><span lang="fr">Propositions du plan de la langue lojbanaise d'avenir</span> <!--
--><span lang="zh-Hant">對於將來的邏輯語的設計的提議</span> <!--
--><span lang="zh-Hans">对于将来的逻辑语的設计的提议</span> <!--
--><span lang="ja">将来のロジバンの設計に対する提案</span>
- <span lang="en">Your works in Lojban</span> <!--
--><span lang="jbo">i se finti do bau la lojban</span> <!--
--><span lang="epo">Viaj verkoj en la loĵbana</span> <!--
--><span lang="fr">Vos œuvres dans le lojban</span> <!--
--><span lang="zh-Hant">使用邏輯語的你們的作品</span> <!--
--><span lang="zh-Hans">使用逻辑语的你们的作品</span> <!--
--><span lang="ja">ロジバンを使った皆さんの作品</span>
- <span lang="en">[About mEntulimu](tavlafidei.html)</span> <!--
--><span lang="jbo">[i velcki la'au mEntulimu li'u](tavlafidei.html)</span> <!--
--><span lang="epo">[Pri mEntulimu](tavlafidei.html)</span> <!--
--><span lang="fr">[A propos de mEntulimu](tavlafidei.html)</span> <!--
--><span lang="zh-Hant">[關於mEntulimu](tavlafidei.html)</span> <!--
--><span lang="zh-Hans">[关于mEntulimu](tavlafidei.html)</span> <!--
--><span lang="ja">[mEntulimuについて](tavlafidei.html)</span>

