package com.revature.Project2.aspects;

import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    private static Logger log = Logger.getLogger(LoggingAspect.class);

    @Before(value = "execution(* com.revature.Project2.*.*.*(..))")
    public void logBefore(JoinPoint joinpoint){
        log.info("Before advice for: " + joinpoint.getTarget().getClass() + ": " + joinpoint.getSignature().getName());

    }
    @After(value = "execution(* com.revature.Project2.*.*.*(..))")
    public void logAfter(JoinPoint joinPoint) {
        log.info("After advice for: " + joinPoint.getTarget().getClass() + ": " + joinPoint.getSignature().getName());
    }

    @AfterThrowing(value = "execution(* com.revature.Project2.services.*.*(..))")
    public void logError(JoinPoint joinPoint){
        log.error("Error when executing method: "+joinPoint.getTarget().getClass()+": "+ joinPoint.getSignature().getName());
    }

    @Around(value = "execution(* com.revature.services.*.*(..))")
    public Object logDuring(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        log.info("Around advice for: " + proceedingJoinPoint.getTarget().getClass() + ": " + proceedingJoinPoint.getSignature().getName());






        Object[] args = proceedingJoinPoint.getArgs();


        Object result = proceedingJoinPoint.proceed(args);
        System.out.println("Result of this logDuring method being invoked: " + result);

        log.info("End of all Advice");

        return result;




    }


}
