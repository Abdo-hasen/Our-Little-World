---
name: qa
description: "Interactive requirements triage, planning, and QA workflow. Use whenever the user invokes /qa or asks for feature clarification, task breakdown, or pre-implementation review. Enforces Egyptian Arabic summary with English technical terms, ASCII UI/architecture mockup, and MCQ clarifications with model answers."
---

# QA & Requirements Clarification Workflow (/qa)

Whenever this skill is triggered (or the user types `/qa`), follow this strict 3-step response protocol before writing any implementation code:

## Phase 1: Understanding Summary (بالبلدي المصري + English Terms)
- اشرح فهمك للمطلوب بلهجة مصرية عامية واضحة وبسيطة ("بالبلدي").
- حافظ على الـ Technical Terminology بالـ English فقط (مثل: Components, State Management, Hooks, Props, APIs, Lifecycles, etc.).
- اثبت إنك مستوعب الـ Scope والـ Edge Cases والهدف الأساسي من غير كلام عام أو حشو.

## Phase 2: Visual ASCII Mockup / Architecture
- ارسم ASCII Mockup أو Wireframe يوضح الـ Layout والـ Component Hierarchy أو الـ Data Flow قبل البدء في كتابة أي كود.
- الـ Mockup لازم يعكس الـ Layout النهائي، أماكن الـ Buttons والـ Inputs، والـ Interactive States المتوقعة عشان نضمن الـ Visual Alignment.

## Phase 3: Clarification Questions (MCQs with Model Answer)
- لو فيه أي نقطة مبهمة، Edge Case، أو قرار تصميمي محتاج حسم:
  - اسأل على هيئة **Multiple Choice Questions (MCQs)**.
  - اعرض الاختيارات في جدول منظم مع شرح مختصر لكل خيار.
  - حدد دايماً **Model Answer** (الإجابة النموذجية الموصى بيها) مع **Rationale** (تعليل هندسي مختصر لسبب التفضيل).
- لا تبدأ في كتابة كود التنفيذ إلا بعد رد وتأكيد الـ User.
