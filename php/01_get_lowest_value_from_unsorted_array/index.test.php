<?php
declare(strict_types=1);
ini_set('xdebug.remote_enable', '0');

define('ABSPATH', '');
define('DS', '/');

require_once '../vendor/autoload.php';
require_once('index.php');

use PHPUnit\Framework\TestCase;

final class MyClassTest extends TestCase
{

    public function test_getTheLowestNumber_simple(): void
    {
        $mock = $this->MockMyClass->getMock();
        $this->assertEquals(1, $mock->getTheLowestValue([2, 1, 3]));
    }

    public function test_getTheLowestNumber_multipleArrays(): void
    {
        $mock = $this->MockMyClass->getMock();
        $this->assertEquals(
            [2, 2, 2], $mock->getTheLowestValue([2, 2, 2], [1, 1, 1, 1])
        );
    }

    public function test_getTheLowestNumber_mixedTypes(): void
    {
        $mock = $this->MockMyClass->getMock();
        $this->assertEquals(
            false, $mock->getTheLowestValue([-10, false, 10])
        );
    }

    protected function setUp(): void
    {
        $this->MockMyClass = $this->getMockBuilder(
            kata\MyClass::class
        )->setMethods(null);
    }

}
